'use client';

import { Tile } from './tiles/tile';
import MemoryContent from './work/memory-content';
import { memoryDict } from './memoryDict';
import { TileContext } from './tiles/TileContext';
import { type ReactNode, useContext, useRef } from 'react';
import { ScrollContext } from './providers/ScrollProvider';

export default function Page() {
	const refContainer = useRef<HTMLDivElement>(null);
	const { scrollY } = useContext(ScrollContext);

	let currentPage = 0;
	let numOfPages = 3;
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

		currentPage = percentY * numOfPages;
	}

	return (
		<TileContext.Provider value={{ numOfPages, currentPage }}>
			<div
				className='relative z-10 bg-black dark:bg-white'
				ref={refContainer}
				style={{
					height: `${numOfPages * 100}vh`,
				}}
			>
				<div className='absolute h-full w-full'>
					<div className='sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2'>
						<div className='h-[30vh] bg-black lg:h-auto'></div>
						<div className='h-[70vh] bg-white lg:h-auto'></div>
					</div>
				</div>
				<div className='sticky top-0 h-screen overflow-hidden'>
					<Tile page={0} key={"20171111_1"}>
						<MemoryContent info={memoryDict["20171111_1"]} />
					</Tile>
					<Tile page={1} key={"20171111_2"}>
						<MemoryContent info={memoryDict["20171111_2"]} />
					</Tile>
					<Tile page={2} key={"20171111_3"}>
						<MemoryContent info={memoryDict["20171111_3"]} />
					</Tile>
				</div>
			</div>
		</TileContext.Provider>
	);
}
