import Intro from './components/intro';
import HeroWrapper from './components/hero-wrapper';
import { ScrollProvider } from './components/providers/ScrollProvider';
import Works from './components/work/works';
import SplashCursor from './components/splash-cursor';
import PageFirst from './components/page-first';
import PageLast from './components/page-last';

import Header from './components/header';
import PageContainer from './components/layouts/page-container';
import { Thoughts } from './components/thoughts';
import { getPosts } from './thoughts/utils';
import Parallax from './components/parallax';
import ImageStacking from './components/image-stacking';
import FramerStacking from './components/framer-stacking';
import ScrollTextTest from './components/scroll-text-test';
import StickyScroll from './components/sticky-scroll';
import Page20171111 from './components/page-20171111';
import Page20171115 from './components/page-20171115';

export default function Home() {
	const posts = getPosts();

	return (
		<ScrollProvider>
			<SplashCursor containerClassName='min-h-svh w-screen' usePrimaryColors={true}>
				<PageFirst />
			</SplashCursor>
			<Page20171111 />
			<Page20171115 />

			<PageLast />
		</ScrollProvider>
	);

	/*
	
	<HeroWrapper />
	<ScrollTextTest />
	<StickyScroll />
	<FramerStacking />
	<PageContainer>
		<Thoughts posts={posts} />
	</PageContainer>
	<Intro />
	<Works />
	*/
}
