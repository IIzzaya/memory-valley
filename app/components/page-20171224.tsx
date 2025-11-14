"use client";

import { ReactLenis } from "lenis/dist/lenis-react";
import { maShanZhengFont, caveatFont } from "../fonts";
import TextAnimation from "./scroll-text";

export default function Page() {
	return (
		<ReactLenis root>
			<div className="grid grid-cols-[0%_25%_75%] relative">
				<div className="sticky top-0 h-screen flex items-start z-20 pointer-events-none">
					<div
						className="pl-6 text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-left"
						style={maShanZhengFont}
					>
						<div className="text-2xl md:text-3xl xl:text-4xl pr-6">
							<br />
							2017年12月24日
						</div>
						<div className="text-2xl md:text-3xl xl:text-4xl pr-6">
							@上海
						</div>
					</div>
				</div>

				<div
					className="pl-6 pt-[33vh] sticky top-0 h-screen flex items-center z-20 pointer-events-none min-w-max"
					style={caveatFont}
				>
					<TextAnimation
						className="xl:text-6xl text-5xl max-w-md mx-auto font-medium capitalize"
						text="Merry Christmas"
						variants={{
							hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
							visible: {
								filter: "blur(0px)",
								opacity: 1,
								y: 0,
								transition: { ease: "linear" },
							},
						}}
					/>
				</div>

				<div className="grid gap-2 relative z-10">
					{["/images/20171224_1.jpg"].map((src) => (
						<figure key={src} className="grid place-content-center">
							<img
								src={src}
								alt=""
								className="transition-all duration-300 w-full h-auto object-cover"
							/>
						</figure>
					))}
				</div>
			</div>
		</ReactLenis>
	);
}
