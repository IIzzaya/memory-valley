'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/dist/lenis-react';
import { maShanZhengFont, caveatFont } from '../fonts';

function opacityForContact(progress01: number, ratioBegin: number, ratioEnd: number) {
	let ratio = (progress01 - ratioBegin) / (ratioEnd - ratioBegin);
	return Math.min(1, Math.max(0, ratio));
}

export default function Page20171111d() {
	const [scrollY, setScrollY] = useState(0);
	useLenis(({ scroll }) => {
		setScrollY(scroll);
	});
	const refContainer = useRef<HTMLDivElement>(null);
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
			<div className='h-5/6'>
				<span />
				<motion.div
					className='pt-[10vh] text-4xl text-center'
					initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
					whileInView={{ scale: 1, opacity: opacityForContact(progress, 0.6, 0.7), filter: 'blur(0px)' }}
				>
					<span style={maShanZhengFont}>2017年11月11日</span>
				</motion.div>
				<motion.div
					className='pt-[2vh] text-2xl text-center'
					initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
					whileInView={{ scale: 1, opacity: opacityForContact(progress, 0.7, 0.8), filter: 'blur(0px)' }}
				>
					<span style={maShanZhengFont}>@闵行·交大</span>
				</motion.div>
			</div>
		</section>
	);
}
