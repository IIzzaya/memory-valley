"use client";

import { ReactLenis } from "lenis/dist/lenis-react";
import { maShanZhengFont, caveatFont } from "../fonts";
import TextAnimation from "./scroll-text";

export default function Page() {
	return (
		<ReactLenis root>
			<div className="grid grid-cols-[75%_25%_0%] relative">
				<div className="grid gap-2 relative z-10">
					<div className="mt-[16vh]"></div>
					{[
						"/images/20181003_1.jpg",
						"/images/20181003_2.jpg",
						"/images/20181003_3.jpg",
						"/images/20181003_4.jpg",
						"/images/20181003_5.jpg",
						"/images/20181003_6.jpg",
						"/images/20181003_7.jpg",
					].map((src) => (
						<figure key={src} className="grid place-content-center">
							<img
								src={src}
								alt=""
								className="transition-all duration-300 w-full h-auto object-cover"
							/>
						</figure>
					))}
				</div>

				<div className="sticky top-0 h-screen flex items-center z-20 pointer-events-none">
					<div
						className="transform -translate-x-[70%] text-right mt-[30vh]"
						style={maShanZhengFont}
					>
						<TextAnimation
							className="text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap"
							text="突然一口气"
							variants={{
								hidden: {
									filter: "blur(10px)",
									opacity: 0,
									y: 20,
								},
								visible: {
									filter: "blur(0px)",
									opacity: 1,
									y: 0,
									transition: { ease: "linear" },
								},
							}}
						/>
						<TextAnimation
							className="text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap"
							text="飞到厦门"
							variants={{
								hidden: {
									filter: "blur(10px)",
									opacity: 0,
									y: 20,
								},
								visible: {
									filter: "blur(0px)",
									opacity: 1,
									y: 0,
									transition: { ease: "linear" },
								},
							}}
						/>
						<TextAnimation
							className="text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap"
							text="那时真好"
							variants={{
								hidden: {
									filter: "blur(10px)",
									opacity: 0,
									y: 20,
								},
								visible: {
									filter: "blur(0px)",
									opacity: 1,
									y: 0,
									transition: { ease: "linear" },
								},
							}}
						/>
						<TextAnimation
							className="text-4xl max-w-md mx-auto font-medium capitalize whitespace-nowrap"
							text="旅行说走就走"
							variants={{
								hidden: {
									filter: "blur(10px)",
									opacity: 0,
									y: 20,
								},
								visible: {
									filter: "blur(0px)",
									opacity: 1,
									y: 0,
									transition: { ease: "linear" },
								},
							}}
						/>
					</div>
				</div>

				<div className="sticky top-0 h-screen flex items-start z-20 pointer-events-none">
					<div
						className="transform -translate-x-full text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-right"
						style={maShanZhengFont}
					>
						<div className="text-2xl md:text-3xl xl:text-4xl pr-6">
							<br />
							2018年10月3日
						</div>
						<div className="text-2xl md:text-3xl xl:text-4xl pr-6">
							@厦门·增厝垵
						</div>
					</div>
				</div>
			</div>
		</ReactLenis>
	);
}
