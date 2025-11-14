'use client';

import { format } from 'date-fns';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/dist/lenis-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import type { BlogPost } from '../thoughts/utils';
import { caveatFont } from '../fonts';
import { maShanZhengFont } from '../fonts';

function opacityForBlock(sectionProgress: number, blockNumber: number) {
	const delta = sectionProgress + 0.5 - blockNumber;

	if (delta >= 0) {
		return 1;
	}

	return 0;
}

export function Thoughts({ posts }: { posts: BlogPost[] }) {
	const [scrollY, setScrollY] = useState(0);

	useLenis(({ scroll }) => {
		setScrollY(scroll);
	});

	const refContainer = useRef<HTMLDivElement>(null);
	const numOfPages = posts.length;
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

		progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
	}


	return (
		<div
			ref={refContainer}
			id='thoughts'>
			{posts.map((post, index) => (
				<motion.div
					key={post.slug}
					className='border-b border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-400 transition-colors duration-500'
					initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
					whileInView={{ scale: opacityForBlock(progress, index), opacity: opacityForBlock(progress, index), filter: 'blur(0px)' }}
				>
					<div className='space-y-2 py-5 border-b border-gray-300/20'>
						<div className='flex w-full items-center justify-between'>
							<time
								className='w-max whitespace-nowrap text-3xl text-primary-500 dark:text-primary-400 font-bold'
								style={caveatFont}
							>
								{format(new Date(post.metadata.publishedAt), 'yyyy MMMM dd')}
							</time>
							<div className='mx-3 flex flex-1 border-b border-primary-500' />
							<span className='flex text-2xl italic text-primary-0' style={maShanZhengFont} >
								@上海
							</span>
						</div>

						<h2 className='text-md w-full max-w-2xl truncate whitespace-nowrap pr-2 font-medium text-black dark:text-white group-hover:underline md:w-auto md:flex-none md:text-xl'>
							{post.metadata.title}
						</h2>
						<p className='text-gray-500 dark:text-gray-400'>
							No. {index}
						</p>
						<p className='text-gray-500 dark:text-gray-400'>
							{progress}
						</p>
						<p className='text-gray-500 dark:text-gray-400'>
							{opacityForBlock(progress, index)}
						</p>
						<p className='text-gray-500 dark:text-gray-400'>
							{post.metadata.summary}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
