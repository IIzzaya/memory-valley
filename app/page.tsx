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
import Page20181208 from './components/page-20181208';
import Page20190205 from './components/page-20190205';
import Page20190224 from './components/page-20190224';
import Page20190316 from './components/page-20190316';
import Page20190406 from './components/page-20190406';
import Page20190512 from './components/page-20190512';
import Page20190525 from './components/page-20190525';
import Page20190627 from './components/page-20190627';
import Page20190628 from './components/page-20190628';
import Page20190714 from './components/page-20190714';
import Page20190802 from './components/page-20190802';
import Page20190807 from './components/page-20190807';
import Page20190812 from './components/page-20190812';
import Page20190830 from './components/page-20190830';
import Page20190921 from './components/page-20190921';
import Page20191019 from './components/page-20191019';
import Page20191105 from './components/page-20191105';
import Page20191123 from './components/page-20191123';
import Page20191212 from './components/page-20191212';
import Page20200108 from './components/page-20200108';
import Page20200218 from './components/page-20200218';
import Page20200623 from './components/page-20200623';
import Page20200707 from './components/page-20200707';
import Page20200725 from './components/page-20200725';
import Page20200830 from './components/page-20200830';
import Page20210531 from './components/page-20210531';
import Page20210601 from './components/page-20210601';
import Page20210602 from './components/page-20210602';
import Page20210603 from './components/page-20210603';
import Page20210604 from './components/page-20210604';
import Page20211225 from './components/page-20211225';
import Page20220331 from './components/page-20220331';
import Page20220830 from './components/page-20220830';
import Page20221218 from './components/page-20221218';
import Page20230607 from './components/page-20230607';
import Page20230610 from './components/page-20230610';
import Page20231225 from './components/page-20231225';
import Page20231226 from './components/page-20231226';
import Page20231227 from './components/page-20231227';
import Page20231229 from './components/page-20231229';
import Page20231230 from './components/page-20231230';
import Page20241003 from './components/page-20241003';
import Page20241004 from './components/page-20241004';
import Page20250511 from './components/page-20250511';
import Page20250830 from './components/page-20250830';

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
			<Page20181208 />
			<Page20190205 />
			<Page20190224 />
			<Page20190316 />
			<Page20190406 />
			<Page20190512 />
			<Page20190525 />
			<Page20190627 />
			<Page20190628 />
			<Page20190714 />
			<Page20190802 />
			<Page20190807 />
			<Page20190812 />
			<Page20190830 />
			<Page20190921 />
			<Page20191019 />
			<Page20191105 />
			<Page20191123 />
			<Page20191212 />
			<Page20200108 />
			<Page20200218 />
			<Page20200623 />
			<Page20200707 />
			<Page20200725 />
			<Page20200830 />
			<Page20210531 />
			<Page20210601 />
			<Page20210602 />
			<Page20210603 />
			<Page20210604 />
			<Page20211225 />
			<Page20220331 />
			<Page20220830 />
			<Page20221218 />
			<Page20230607 />
			<Page20230610 />
			<Page20231225 />
			<Page20231226 />
			<Page20231227 />
			<Page20231229 />
			<Page20231230 />
			<Page20241003 />
			<Page20241004 />
			<Page20250511 />
			<Page20250830 />

			<PageLast />
		</ScrollProvider>
	);
}
