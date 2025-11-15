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
							2019年9月21日
						</div>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							@浙江·嘉兴
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
							text='西塘古镇'
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
							text='古色古香的'
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
							text='商业化'
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
						'/images/20190921_1.jpg',
						'/images/20190921_2.jpg',
						'/images/20190921_3.jpg',
						'/images/20190921_4.jpg',
						'/images/20190921_5.jpg',
						'/images/20190921_6.jpg',
						'/images/20190921_7.jpg',
						'/images/20190921_8.jpg',
						'/images/20190921_9.jpg',
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
