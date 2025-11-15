'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';
import { caveatFont, maShanZhengFont } from '../fonts';
import { getAssetPath } from '../utils';

export default function Page() {
	return (
		<ReactLenis root>
			<div className='grid grid-cols-[25%_75%] relative'>
				<div className='sticky top-0 h-screen flex items-center z-20 pointer-events-none min-w-max'>
					<div
						className='pl-6 text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap'
						style={maShanZhengFont}
					>
						<div className='text-2xl md:text-3xl xl:text-4xl'>
							2017年11月15日
						</div>
						<div className='text-2xl md:text-3xl xl:text-4xl'>
							@上海·杜莎夫人蜡像馆
						</div>
						<div>
							<br />
							那一天
							<br />
							我们见了好多名人
						</div>
					</div>
				</div>

				<div className='grid gap-2 relative z-10'>
					{[
						'/images/20171115_1.jpg',
						'/images/20171115_2.jpg',
						'/images/20171115_3.jpg',
						'/images/20171115_4.jpg',
						'/images/20171115_5.jpg',
						'/images/20171115_6.jpg',
						'/images/20171115_7.jpg',
						'/images/20171115_8.jpg',
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
