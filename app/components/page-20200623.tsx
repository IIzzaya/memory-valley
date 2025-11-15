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
					{['/images/20200623_1.jpg'].map((src) => (
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
							text='下一次见面'
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
							text='已是六月'
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
							2020年6月23日
						</div>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							@上海·宜山路
						</div>
					</div>
				</div>
			</div>
		</ReactLenis>
	);
}
