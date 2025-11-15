import Image from 'next/image';
import type { ReactNode } from 'react';
import { caveatFont, maShanZhengFont } from '../fonts';
import { getAssetPath } from '../utils';

export type MemoryInfo = {
	leftPart: ReactNode;
	rightPart: ReactNode;
};

interface StringDictionary {
	[key: string]: MemoryInfo; // Keys are strings, values are strings
}

export const memoryDict: StringDictionary = {
	'20171111_1': {
		leftPart: (
			<div>
				<div
					className='text-2xl md:text-3xl xl:text-4xl text-center'
					style={maShanZhengFont}
				>
					{'2017年11月11日'}
				</div>
				<div
					className='text-4xl md:text-5xl xl:text-6xl tracking-tight text-center'
					style={maShanZhengFont}
				>
					{'@闵行·交大'}
				</div>
			</div>
		),
		rightPart: (
			<div className='flex w-full max-w-md px-8 md:px-0 pb-8 md:pb-0 justify-center items-center'>
				<div className='drop-shadow-2xl sm:mt-10 md:mt-24'>
					<Image
						alt={'20171111_1'}
						src={getAssetPath('/images/20171111_1.jpg')}
						width={3024}
						height={4032}
					/>
				</div>
			</div>
		),
	},
	'20171111_2': {
		leftPart: (
			<div>
				<div
					className='text-4xl md:text-5xl xl:text-6xl tracking-tight text-center'
					style={maShanZhengFont}
				>
					谢谢那时的<a className='underline-primary'>我</a>
				</div>
				<div
					className='text-4xl md:text-5xl xl:text-6xl tracking-tight text-center'
					style={maShanZhengFont}
				>
					瞥见了人群中的<a className='underline-primary'>你</a>
				</div>
			</div>
		),
		rightPart: (
			<div className='flex w-full max-w-md pb-8 md:pb-0 justify-center items-center'>
				<div className='drop-shadow-2xl sm:mt-10 md:mt-24'>
					<Image
						alt=''
						src={getAssetPath('/images/20171111_2.jpg')}
						width={2428}
						height={6000}
					/>
				</div>
			</div>
		),
	},
	'20171111_3': {
		leftPart: (
			<div>
				<div
					className='text-4xl md:text-5xl xl:text-6xl tracking-tight text-center'
					style={caveatFont}
				>
					{"It's My Lucky Dog's Day"}
				</div>
			</div>
		),
		rightPart: (
			<div className='flex w-full max-w-md px-8 md:px-0 pb-8 md:pb-0 justify-center items-center'>
				<div className='drop-shadow-2xl sm:mt-10 md:mt-24'>
					<Image
						alt={'20171111_3'}
						src={getAssetPath('/images/20171111_3.jpg')}
						width={3024}
						height={4032}
					/>
				</div>
			</div>
		),
	},
};
