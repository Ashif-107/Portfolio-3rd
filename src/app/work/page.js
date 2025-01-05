'use client'
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

import Lenis from '@studio-freight/lenis';


import Preloader from '../../workcomponents/Transition';
import VerticalPicsSlider from '../../workcomponents/VerticalPicsSlider'
import WorkLanding from '../../workcomponents/WorkLanding'

export default function Work() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])



    useEffect(() => {
        
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();

                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()

    }, [])

    return (
        <main>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Spline
                scene="https://prod.spline.design/GSWfY-SuQ2NzjzDx/scene.splinecode"
            />
            <WorkLanding />
            <VerticalPicsSlider />
            <div className={styles.spacer}></div>
        </main>

    )
}