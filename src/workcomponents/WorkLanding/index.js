'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.scss';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';



// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.  ',
        image1: '/images/d2m.png',
        image2: '/images/d2m2.png',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a description of project two. This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.',
        image1: '/images/ashlanote.png',
        image2: '/images/ashlanote.png',
    },
    {
        id: 3,
        title: 'Project One',
        description: 'This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.  ',
        image1: '/images/d2m.png',
        image2: '/images/d2m.png',
    },
    {
        id: 4,
        title: 'Project Two',
        description: 'This is a description of project two. This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.This is a description of project one.',
        image1: '/images/ashlanote.png',
        image2: '/images/ashlanote.png',
    },
    // Add more projects as needed
];


const ProjectShowcase = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        projectRefs.current.forEach((ref, index) => {
            if (ref) {

                // Animate the image container separately
                gsap.fromTo(
                    ref.querySelector(`.${styles.imageWrapper}`),
                    { y: -150, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

                // Animate the text container separately
                gsap.fromTo(
                    ref.querySelector(`.${styles.textContainer}`),
                    { y: 150, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

                // Animate the split text words
                const words = ref.querySelectorAll(`.${styles.splitTextWord}`);
                gsap.fromTo(
                    words,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power4.out',
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );

            }
        });
    }, []);

    return (
        <div className={styles.container}>
            {projects.map((project, index) => (
                <div
                    className={`${styles.project} ${index % 2 === 0 ? styles.leftAligned : styles.rightAligned}`}
                    key={project.id}
                    ref={(el) => (projectRefs.current[index] = el)}
                >
                    <div className={styles.imageWrapper} style={{ backgroundImage: `url(${project.image1})` }}>
                        <div className={styles.imageContainer}>
                            <Image src={project.image1} alt={project.title} width={400} height={400} />
                            <Image src={project.image2} alt={project.title} width={400} height={400} />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h2>{project.title}</h2>
                        <p>
                            {project.description.split(' ').map((word, idx) => (
                                <span key={idx} className={styles.splitTextWord}>
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectShowcase;