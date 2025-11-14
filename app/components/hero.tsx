'use client';

import classNames from 'classnames';
import ArrowDown from './arrow-down';
import SplashCursor from './splash-cursor';
import Link from 'next/link';
import { merryWeather } from '../fonts';
import { caveatFont } from '../fonts';
import { maShanZhengFont } from '../fonts';
import { useEffect, useRef, useState } from 'react';

export const useDate = () => {
	const locale = 'en';
	const [today, setDate] = useState(new Date());

	const dateBegin = Date.parse("2017-11-11T03:00:00Z"); // Save the current date to be able to trigger an update

	useEffect(() => {
		const timer = setInterval(() => { // Creates an interval which will update the current data every minute
			// This will trigger a rerender every component that uses the useDate hook.
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
		}
	}, []);

	const dateToday = today.getDate();
	const todayDate = `${today.toLocaleDateString(locale, { year: 'numeric'})} ${today.toLocaleDateString(locale, { month: 'long'})} ${dateToday}`;
	const todayTime = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric' });

	const dateNow = Date.now();
	const deltaInMilliseconds  = dateNow - dateBegin;
	const hour = today.getHours();
	const deltaInSeconds = Math.floor((deltaInMilliseconds  / 1000));
	const deltaInMinutes = Math.floor((deltaInSeconds / 60));
	const deltaInHours = Math.floor((deltaInMinutes / 60));
	const deltaInDay = Math.floor((deltaInHours / 24));
	var ageDate = new Date(deltaInMilliseconds);
	const deltaInYear = Math.abs(ageDate.getUTCFullYear() - 1970);

	return {
		todayDate,
		todayTime,
		deltaInSeconds,
		deltaInMinutes,
		deltaInHours,
		deltaInDay,
		deltaInYear,
	};
};

export default function Hero() {
	let dateInfo = useDate();
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<div className={classNames('relative min-h-svh', merryWeather.className)}>
				<ArrowDown />

				<div className='absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14'>
					<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
						{dateInfo.todayDate}<br />
						{dateInfo.todayTime}<br />
						<br />
						deltaInSeconds: {dateInfo.deltaInSeconds}<br />
						{dateInfo.deltaInMinutes}<br />
						{dateInfo.deltaInHours}<br />
						deltaInDay: {dateInfo.deltaInDay}<br />
						deltaInYear: {dateInfo.deltaInYear}<br />
						<br />
						测试中文{' '}
						<span className='font-bold'>personal portfolio — </span> or, as I
						like to call it, my{' '}
						<span className='italic border-b'>playground</span> on the web.
					</h1>
					<section className='relative z-10'>
						<p className='text-base text-justify '>
							I&apos;m Dale Larroder — a Software Engineer and forever a
							student of the craft. I love building things for the web and am
							always on the lookout for new challenges and opportunities to
							learn. I&apos;m passionate about creating beautiful and
							functional user experiences. Right now, I&apos;m building cool
							things at{' '}
							<a
								className='underline-magical'
								data-skip-splash-cursor
							>
								Aphex
							</a>
							.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
