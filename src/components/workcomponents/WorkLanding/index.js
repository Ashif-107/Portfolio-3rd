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
        title: 'Daily2Min',
        description: [
            'This is a Journaling App, but not a normal one.',
            'Many people want to journal but after some days they will feel it as a burden.',
            'Then I got a idea for this app, which will take only 2 minutes of your day.',
            'This was an inspiration from one of my favorite book "Atomic Habits" by James Clear.',
            'You can write your thoughts, feelings, or anything you want to write.',
            'This app will help you to build a habit of journaling.',
            'Review your past entries and see how you have grown.',
            'Made with Next Js, Postgres, and Tailwind CSS.',
        ],
        image1: '/images/d2m.png',
        image2: '/images/d2m2.png',
        blurBg: '/images/d2m.png',
    },
    {
        id: 2,
        title: 'AshlaNote',
        description: [
            'A app which will take the note taking to next level',
            'Feeling bored of taking notes during a class or meeting? This app will make it interesting.',
            'A node based note taking app which will help you to take notes in a fun way.',
            'Create and connect the nodes to make a flowchart of your notes.',
            'Doing things with fun will make you remember things for a long time.',
            'Dark mode is also availabe for people who thinks they are Batman.',
            'Made with Next Js, Reactflow, and Tailwind etc.'
        ],
        image1: '/images/ashlanote.png',
        image2: '/images/ashlanotedark.png',
        blurBg: '/images/ashlanotehome.png',
    },
    
    // Add more projects as needed
];


const splitText = (text) => {
    return text.split('').map((char, index) => (
        <span key={index} className={styles.char}>
            {char}
        </span>
    ));
};


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
                const textContainer = ref.querySelector(`.${styles.textContainer}`);
                const chars = textContainer.querySelectorAll(`.${styles.char}`);
                gsap.fromTo(
                    chars,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

               
            }
        });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>WORKS ON FULLSTACK APPS</h1>
            {projects.map((project, index) => (
                <div
                    className={`${styles.project} ${index % 2 === 0 ? styles.leftAligned : styles.rightAligned}`}
                    key={project.id}
                    ref={(el) => (projectRefs.current[index] = el)}
                >
                    <div className={styles.imageWrapper} style={{ backgroundImage: `url(${project.blurBg})` }}>
                        <div className={styles.imageContainer}>
                            <Image src={project.image1} alt={project.title} width={400} height={400} />
                            <Image src={project.image2} alt={project.title} width={400} height={400} />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h2>{project.title}</h2>
                        <ul>
                            {project.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectShowcase;