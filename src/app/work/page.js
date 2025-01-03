'use client';

import styles from './page.module.scss'
import Image from 'next/image';

import { useTransform,useScroll , motion} from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { useEffect, useRef } from 'react';

const images = [
    "work1.png",
    "work 2.png",
    "work3.png",    
    "work4.png",
    "work5.png",
    "work6.jpeg",
    "work7.jpeg",
    "work8.jpeg",
    "work9.jpeg",
    "d2m.png",
    "ashlanote.png",
    "jv.png"
]

export default function Work(){

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset:['start end','end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, 2000])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 1300])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 500])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 2700])

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


    return(
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div ref={container} className={styles.gallery}>
                <Coloumn images ={[images[0], images[1], images[8]]} y={y}/>
                <Coloumn images ={[images[2] ,images[11], images[3]]} y={y2} />
                <Coloumn images ={[images[1], images[5], images[0]]} y={y3}/>
                <Coloumn images ={[images[5], images[6], images[7]]} y={y4}/>
            </div>
            <div className={styles.spacer}></div>

        </main>
    )
} 


const Coloumn = ({images, y=0}) => {
    return(
        <motion.div style={{y}} className={styles.coloumn}>
            {
                images.map( (src, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <Image fill src={`/images/${src}`} alt="image" />
                    </div>
                ))
            }
        </motion.div>
    )
}