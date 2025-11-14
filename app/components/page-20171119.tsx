"use client";

import classNames from "classnames";
import ArrowDown from "./arrow-down";
import SplashCursor from "./splash-cursor";
import Link from "next/link";
import { merryWeather } from "../fonts";
import { caveatFont } from "../fonts";
import { useLenis } from "lenis/dist/lenis-react";
import { maShanZhengFont } from "../fonts";
import { useEffect, useRef, useState } from "react";

export const useDate = () => {
	const locale = "en";
	const [today, setDate] = useState(new Date());

	const dateBegin = Date.parse("2017-11-11T12:00:00Z"); // Save the current date to be able to trigger an update

	useEffect(() => {
		const timer = setInterval(() => {
			// Creates an interval which will update the current data every minute
			// This will trigger a rerender every component that uses the useDate hook.
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
		};
	}, []);

	const dateToday = today.getDate();
	const todayDate = `${today.toLocaleDateString(locale, {
		year: "numeric",
	})} ${today.toLocaleDateString(locale, { month: "long" })} ${dateToday}`;
	const todayTime = today.toLocaleTimeString(locale, {
		hour: "numeric",
		hour12: false,
		minute: "numeric",
		second: "numeric",
	});

	const dateNow = Date.now();
	const deltaInMilliseconds = dateNow - dateBegin;
	const deltaInSeconds = Math.floor(deltaInMilliseconds / 1000);
	const deltaInMinutes = Math.floor(deltaInSeconds / 60);
	const deltaInHours = Math.floor(deltaInMinutes / 60);
	const deltaInDay = Math.floor(deltaInHours / 24);
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

function opacityForBlock(sectionProgress: number, blockNumber: number) {
	const progress = sectionProgress - blockNumber;

	if (progress >= 0 && progress < 1) {
		return 1;
	}

	return 0.2;
}

export default function Page() {
	const [scrollY, setScrollY] = useState(0);

	useLenis(({ scroll }) => {
		setScrollY(scroll);
	});

	const refContainer = useRef<HTMLDivElement>(null);
	const numOfPages = 8;
	let progress = 0;
	const { current: elContainer } = refContainer;

	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;

		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH
			) / clientHeight;

		progress = Math.min(
			numOfPages - 0.5,
			Math.max(0.5, percentY * numOfPages)
		);
	}

	let timer = useDate();

	return (
		<div
			ref={refContainer}
			className="relative z-10 bg-black text-white dark:bg-white dark:text-black"
		>
			<div
				className="
				mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center font-semibold tracking-tight
				text-4xl px-10 py-24
				md:text-6xl md:py-28
				lg:text-7xl lg:px-20 lg:py-3"
			>
				<div
					className="leading-[1.8] text-center"
					style={maShanZhengFont}
				>
					<div style={{ opacity: opacityForBlock(progress, 0) }}>
						自那一天起
					</div>

					<div style={{ opacity: opacityForBlock(progress, 1) }}>
						你宛如一颗彗星
					</div>

					<div style={{ opacity: opacityForBlock(progress, 2) }}>
						划入我的星空
					</div>

					<div style={{ opacity: opacityForBlock(progress, 3) }}>
						一同闪耀
					</div>

					<div
						className="inline-block whitespace-nowrap"
						style={{ opacity: opacityForBlock(progress, 4) }}
					>
						<span>距今已有</span>
						<span className="pr-2 text-5xl" style={caveatFont}>
							{timer.deltaInDay}
						</span>
						<span>个日夜</span>
					</div>

					<div
						className="inline-block whitespace-nowrap"
						style={{ opacity: opacityForBlock(progress, 5) }}
					>
						<span>历经</span>
						<span className="pr-2 text-5xl" style={caveatFont}>
							{timer.deltaInSeconds}
						</span>
						<span>针分秒</span>
					</div>

					<div style={{ opacity: opacityForBlock(progress, 6) }}>
						我们的故事
					</div>
					<div style={{ opacity: opacityForBlock(progress, 7) }}>
						开始书写
					</div>
				</div>
			</div>
		</div>
	);
}
