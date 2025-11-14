"use client";

import { ReactLenis } from "lenis/dist/lenis-react";
import { maShanZhengFont, caveatFont } from "../fonts";

export default function Page() {
	return (
		<ReactLenis>
			<div className="grid grid-cols-[75%_25%_0%] relative">
				<div className="grid gap-2 relative z-10">
					{["/images/20171118_2.jpg", "/images/20171118_3.jpg"].map(
						(src) => (
							<figure
								key={src}
								className="sticky top-0 h-screen place-content-center"
							>
								<img
									src={src}
									alt=""
									className="transition-all duration-300 object-cover"
								/>
							</figure>
						)
					)}
				</div>

				<div className="sticky top-0 h-screen flex items-center z-20 pointer-events-none">
					<div
						className="transform -translate-x-[70%] text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-right"
						style={maShanZhengFont}
					>
						<div>
							可能有些唐突
							<br />
							带着些许大胆
						</div>
					</div>
				</div>

				<div className="sticky top-0 h-screen flex items-start z-20 pointer-events-none">
					<div
						className="transform -translate-x-full text-4xl md:text-5xl xl:text-6xl font-light whitespace-nowrap text-right"
						style={maShanZhengFont}
					>
						<div className="text-2xl md:text-3xl xl:text-4xl pr-6">
							<br />
							2017年11月18日
						</div>
						<div className="text-2xl md:text-3xl xl:text-4xl pr-6">
							@上海·外滩
						</div>
					</div>
				</div>
			</div>
		</ReactLenis>
	);
}
