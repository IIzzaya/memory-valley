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
						'/images/20181005_1.jpg',
						'/images/20181005_2.jpg',
						'/images/20181005_3.jpg',
						'/images/20181005_4.jpg',
						'/images/20181005_5.jpg',
						'/images/20181005_6.jpg',
						'/images/20181005_7.jpg',
						'/images/20181005_8.jpg',
						'/images/20181005_9.jpg',
						'/images/20181005_10.jpg',
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
							text='四处逛逛逛'
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
						<div style={caveatFont}>
							<TextAnimation
								className='text-5xl max-w-md mx-auto font-medium capitalize whitespace-nowrap'
								text='Enjoy City Walk'
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
				</div>

				<div className='sticky top-0 h-screen flex items-start z-20 pointer-events-none'>
					<div
						className='transform -translate-x-full text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-right'
						style={maShanZhengFont}
					>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							<br />
							2018年10月5日
						</div>
						<div className='text-2xl md:text-3xl xl:text-4xl pr-6'>
							@厦门·植物园
						</div>
					</div>
				</div>
			</div>
		</ReactLenis>
	);
}
