'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';
import { caveatFont, maShanZhengFont } from '../fonts';
import { getAssetPath } from '../utils';
import TextAnimation from './scroll-text';

export default function Page() {
	return (
		<ReactLenis root>
			<div className='grid grid-cols-[75%_25%_0%] relative'>
				<div className='grid gap-2 relative z-10'>
					<div className='mt-[16vh]'></div>
					{[
						'/images/20210531_1.jpg',
						'/images/20210531_2.jpg',
						'/images/20210531_3.jpg',
						'/images/20210531_4.jpg',
						'/images/20210531_5.jpg',
						'/images/20210531_6.jpg',
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

				<div className='sticky top-0 h-screen flex items-center z-20 pointer-events-none'>
					<div
						className='transform -translate-x-[70%] text-right mt-[30vh]'
						style={maShanZhengFont}
					>
						<TextAnimation
							className='text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap'
							text='趁年少来一场'
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
						<TextAnimation
							className='text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap'
							text='说走就走的旅行'
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

				<div className='sticky top-0 h-screen flex items-start z-20 pointer-events-none'>
					<div
						className='transform -translate-x-full text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-right'
						style={maShanZhengFont}
					>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							<br />
							2021年5月31日
						</div>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							@西藏·拉萨
						</div>
					</div>
				</div>
			</div>
		</ReactLenis>
	);
}
