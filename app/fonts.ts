import { Merriweather, Mukta } from 'next/font/google';
import "@fontsource/caveat"; // Defaults to weight 400
import "@fontsource/caveat/400.css"; // Specify weight
import '@fontsource/ma-shan-zheng';

export const mukta = Mukta({
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--font-mukta',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const merryWeather = Merriweather({
	weight: ['300', '400', '700', '900'],
	variable: '--font-merriweather',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

// 可选导出一个样式对象，方便复用
export const caveatFont = {
	fontFamily: "'Caveat', cursive",
	textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
};

// 可选导出一个样式对象，方便复用
export const maShanZhengFont = {
	fontFamily: "'Ma Shan Zheng', cursive",
	textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
};