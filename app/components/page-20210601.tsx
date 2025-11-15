'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';
import { caveatFont, maShanZhengFont } from '../fonts';
import { getAssetPath } from '../utils';
import TextAnimation from './scroll-text';

export default function Page() {
	return (
		<ReactLenis root>
			<div className='grid grid-cols-[0%_25%_75%] relative'>
				<div className='sticky top-0 h-screen flex items-start z-20 pointer-events-none'>
					<div
						className='pl-6 text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-left'
						style={maShanZhengFont}
					>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							<br />
							2021年6月1日
						</div>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							@西藏·拉萨
						</div>
					</div>
				</div>

				<div className='sticky top-0 h-screen items-center z-20 pointer-events-none pl-6'>
					<div
						className='font-light text-left mt-[60vh]'
						style={maShanZhengFont}
					>
						<TextAnimation
							className='text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap'
							text='然而出师未捷'
							variants={{
								hidden: {
									filter: 'blur(10px)',
									opacity: 0,
									y: 20,
								},
								visible: {
									filter: 'blur(0px)',
									opacity: 1,
									y: 0,
									transition: { ease: 'linear' },
								},
							}}
						/>
					</div>
				</div>

				<div className='grid gap-2 relative z-10'>
					<div className='mt-[16vh]'></div>
					{[
						'/images/20210601_1.jpg',
						'/images/20210601_2.jpg',
						'/images/20210601_3.jpg',
					].map((src) => (
						<figure key={src} className='grid place-content-center'>
							<img
								src={getAssetPath(src)}
								alt=''
								className='transition-all duration-300 w-full h-auto object-cover'
								loading='lazy'
							/>
						</figure>
					))}
				</div>
			</div>
		</ReactLenis>
	);
}
