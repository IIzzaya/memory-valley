import Page20171111 from './components/page-20171111';
import Page20171115 from './components/page-20171115';
import Page20171118 from './components/page-20171118';
import Page20171119 from './components/page-20171119-wrapper';
import Page20171224 from './components/page-20171224';
import Page20180305 from './components/page-20180305';
import Page20180401 from './components/page-20180401';
import Page20180406 from './components/page-20180406';
import Page20180429 from './components/page-20180429';
import Page20180527 from './components/page-20180527';
import Page20180829 from './components/page-20180829';
import Page20181003 from './components/page-20181003';
import Page20181004 from './components/page-20181004';
import Page20181005 from './components/page-20181005';
import PageFirst from './components/page-first';
import PageLast from './components/page-last';
import { ScrollProvider } from './components/providers/ScrollProvider';
import SplashCursor from './components/splash-cursor';

export default function Home() {
	return (
		<ScrollProvider>
			<SplashCursor
				containerClassName='min-h-svh w-screen'
				usePrimaryColors={true}
			>
				<PageFirst />
			</SplashCursor>
			<Page20171111 />
			<Page20171115 />
			<Page20171118 />
			<Page20171119 />
			<Page20171224 />
			<Page20180305 />
			<Page20180401 />
			<Page20180406 />
			<Page20180429 />
			<Page20180527 />
			<Page20180829 />
			<Page20181003 />
			<Page20181004 />
			<Page20181005 />

			<PageLast />
		</ScrollProvider>
	);

	/*
	
	<HeroWrapper />
	<ScrollTextTest />
	<StickyScroll />
	<FramerStacking />
	<Intro />
	<Works />
	*/
}

/*
// 2017.11.11 上海 闵行交大 第七届民族文化节
// 2017.11.15 上海 杜莎夫人蜡像馆
// 2017.11.18 上海 外滩
// 2017.12.24 上海 平安夜
// 2018.3.5 上海 莘庄
// 2018.4.1 上海 静安大悦城
// 2018.4.6 - 2018.4.7 杭州 西湖
// 2018.4.29 - 2018.5.1 苏州 观前街 诚品书店
// 2018.5.27 上海 南京路步行街
2018.8.29 香港
2018.10.3 - 2018.10.5厦门
2018.12.8 闵行交大 下雪了
2019.2.4 除夕
2019.2.24 上海 仲盛世界商城
2019.3.16 闵行 交大
2019.3.31 闵行 交大
2019.4.6 上海 松江 泰晤士小镇
2019.5.12 Somewhere
2019.5.25 上海 某Hotel
2019.6.27 长沙 文和友 茶颜悦色
2019.7.14 上海 中山北路 V领地
2019.8.2 上海 白玉兰广场 Unity
2019.8.7 上海 东方明珠
2019.8.12 上海 外滩
2019.8.30 上海 中山北路 生日 布歌东京
2019.9.21 浙江嘉兴 西塘古镇
2019.10.19 上海闵行 猫咖
2019.11.1 上海 长宁 龙之梦
2019.11.5 上海 宜家
2019.11.23 上海 Somewhere
2019.12.12 上海 莘庄 仲盛 太二酸菜鱼
2020.1.8 上海 迪士尼
2020.2.18 江苏 建湖
2020.6.10 上海
2020.6.23 上海 宜山路地铁站
2020.7.7 上海 闵行 交大 毕业
2020.7.12 上海 闵行 交大 毕业
2020.7.25 上海 静安 随物生心
2020.8.30 上海 田林十三村
2020.9.5 Somewhere
2021.5.31 西藏 布达拉宫
2021.6.2 西藏 羊卓雍错
2021.12.25 上海 龙华寺
2022.3.14 上海 田林十三村 疫情开始
2022.8.30 上海 上缝小区
2022.12.18 上海 上缝小区 首阳
2023.3.5 上海 印象城 照片
2023.6.7 重庆 解放碑步行街
2023.6.10 成都 都江堰
2023.10.1 淄博
2023.12.25 大阪
2023.12.26 奈良
2023.12.27 京都 清水寺
2023.12.29 富士山下
2023.12.30 东京 浅草寺
2024.10.3 常州 嬉戏谷 太湖湾音乐节
2024.10.4 苏州 许嵩
2025.5.11 韩国 首尔
2025.8.30 上海 徐汇 布歌东京
2025.10.19 上海 LV邮轮
*/
