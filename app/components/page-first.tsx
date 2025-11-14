'use client';

import TextAnimation from './scroll-text';
import { caveatFont } from '../fonts';
import { ArrowDownIcon } from './layouts/icons/arrow-down-icon';

export default function PageFirst() {
    return (
        <div className='relative min-h-svh overflow-hidden'>
            <div className='pt-[33vh] flex flex-col justify-center items-center text-center' style={caveatFont}>
                <TextAnimation
                    text='a Letter for You'
                    variants={{
                        hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                        visible: {
                            filter: 'blur(0px)',
                            opacity: 1,
                            y: 0,
                            transition: { ease: 'linear' },
                        },
                    }}
                    className='xl:text-6xl text-5xl max-w-md mx-auto font-medium capitalize'
                />
            </div>

            <div className='pt-[20vh] flex flex-col justify-center items-center text-center' style={caveatFont}>
                <TextAnimation
                    text='Skyler'
                    variants={{
                        hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                        visible: {
                            filter: 'blur(0px)',
                            opacity: 1,
                            y: 0,
                            transition: { ease: 'linear' },
                        },
                    }}
                    className='xl:text-6xl text-5xl max-w-md mx-auto font-medium capitalize'
                />
            </div>

            <div className='z-10 absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer dark:text-white'>
                <ArrowDownIcon size={18}/>
            </div>
        </div >
    );
}
