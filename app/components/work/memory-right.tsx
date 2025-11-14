import type { ReactNode } from 'react';

export interface MemoryRightProps {
	children: ReactNode;
	progress: number;
}

export function MemoryRight({ children, progress }: MemoryRightProps) {
	const translateY = Math.max(-50, -(progress - 0.5) * 50);

	return (
		<div
			className='flex h-[70vh] md:h-screen w-full justify-center items-center'
			style={{ transform: `translateY(${translateY}px)` }}
		>
			{children}
		</div>
	);
}
