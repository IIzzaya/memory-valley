import { MemoryLeft } from './memory-left';
import { MemoryRight } from './memory-right';
import type { MemoryInfo } from '../memoryDict';

interface MemoryContentProps {
	info: MemoryInfo;
	progress?: number;
}

export default function MemoryContent({ info, progress = 0 }: MemoryContentProps) {

	return (
		<div className='min-h-screen w-full grid grid-cols-1 lg:grid-cols-2'>
			<MemoryLeft progress={progress}>
				{info.leftPart}
			</MemoryLeft>
			<MemoryRight progress={progress}>
				{info.rightPart}
			</MemoryRight>
		</div>
	);
}
