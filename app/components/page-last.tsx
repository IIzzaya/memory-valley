'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/dist/lenis-react';
import { maShanZhengFont, caveatFont } from '../fonts';

function opacityForContact(progress01: number, ratioBegin: number, ratioEnd: number) {
	let ratio = (progress01 - ratioBegin) / (ratioEnd - ratioBegin);
	return Math.min(1, Math.max(0, ratio));
}

export default function PageLast() {

	const [scrollY, setScrollY] = useState(0);

	useLenis(({ scroll }) => {
		setScrollY(scroll);
	});

	const refContainer = useRef<HTMLDivElement>(null);
	const numOfPages = 3;
	let progress = 0;
	const { current: elContainer } = refContainer;

	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;

		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH,
			) / clientHeight;

		progress = percentY + 0.5;
	}

	return (
		<section
			className='relative h-screen w-screen py-10 px-12 md:px-32 xl:px-36 dark:bg-black dark:text-white bg-white  text-black'
			ref={refContainer}
		>
			<div className='flex flex-col justify-evenly h-5/6'>
				<span />
				<motion.div
					className='text-4xl md:text-4xl xl:text-8xl'
					initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
					whileInView={{ scale: 1, opacity: opacityForContact(progress, 0.3, 0.5), filter: 'blur(0px)' }}
				>
					<span className='text-4xl md:text-4xl xl:text-8x' style={caveatFont}>
						Let&apos;s <br />
						Make the Future <br />
						Together
					</span>
				</motion.div>
				<motion.div
					className='text-4xl md:text-4xl xl:text-8xl'
					initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
					whileInView={{ scale: 1, opacity: opacityForContact(progress, 0.7, 0.8), filter: 'blur(0px)' }}
				>
					<span className='text-4xl md:text-4xl xl:text-8x' style={caveatFont}>
						Marry {' '} <a className='underline-primary'>Me</a><br />
						<a className='underline-primary'>Skyler</a>
					</span>
				</motion.div>
				<span />
				<span />
				<motion.div
					className='text-4xl md:text-4xl xl:text-8xl text-end'
					initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
					whileInView={{ scale: 1, opacity: opacityForContact(progress, 0.9, 0.95), filter: 'blur(0px)' }}
				>
					<span className='text-4xl md:text-4xl xl:text-8x' style={caveatFont}>
						From {' '} <a className='underline-primary'>Izaya</a>
					</span>
				</motion.div>
			</div>
		</section>
	);
}
