'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CyberpunkProjectCard from '../CyberpunkProjectCard';
import CyberpunkDecorations from '../CyberpunkDecorations';
import { Code, Gamepad2 } from 'lucide-react';
import styles from './style.module.scss';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Hardcoded project data
const softwareProjects = [
  {
    id: 1,
    title: 'DeskFlow – Productivity Tracker',
    description:
      'A cross-platform desktop productivity tracker built using Rust and Tauri. Tracks active application usage, calculates daily focus scores, and visualizes productivity trends. Designed with deep system-level integrations like process monitoring, runtime permission handling, and app identification to create an efficient, lightweight desktop utility.',
    techStack: ['Rust', 'Tauri', 'JavaScript', 'SQLite', 'Tailwind'],
    githubUrl: 'https://github.com/Ashif-107/DeskFlow',
    demoUrl: null,
    status: 'Active',
  },
  {
    id: 2,
    title: 'YouTube Data Pipeline',
    description:
      'Built an end-to-end ETL pipeline that extracts YouTube video comments using the YouTube Data API, transforms them using custom NLP scripts, and loads the data into AWS S3 for further analysis. Scheduled with Apache Airflow for automation and scalability. Built to experiment with audience sentiment analysis and content optimization.',
    techStack: ['Python', 'Airflow', 'YouTube API', 'AWS S3', 'Pandas'],
    githubUrl: 'https://github.com/Ashif-107/youtube-etl',
    demoUrl: null,
    status: 'Completed',
  },

  {
    id: 3,
    title: 'Vibrance\'25 – 3D Website & Event Platform',
    description:
      'Crafted the official tech & cultural fest website for Vibrance\'25, including an immersive 3D merchandise page and animated landing sections. Led frontend development, coordinated with design and backend teams, and handled deployment. The project demanded real-world problem solving under tight deadlines while mastering Git and collaborative workflows.',
    techStack: ['Three.js', 'GSAP', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Ashif-107/vibrance25',
    demoUrl: 'https://vibrance-vtop.com',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Ashlanote – Node-Based Note-Taking App',
    description:
      'A dynamic, visual-first note-taking platform built with React Flow. Users can create, drag, and connect rich-text notes as nodes, with GSAP-powered animations for an intuitive interface. Designed for freeform ideation, research mapping, and creative workflows, mimicking Milanote-style UX.',
    techStack: ['Next.js', 'React Flow', 'Tailwind CSS', 'GSAP'],
    githubUrl: 'https://github.com/Ashif-107/ashlanote',
    demoUrl: 'https://ashlanote.vercel.app',
    status: 'Active',
  },
  {
    id: 5,
    title: 'Daily2Min – Journal Habit Builder',
    description:
      'A minimalistic web app designed to help users build journaling habits in just 2 minutes a day. Focuses on simplicity and consistency with mood tracking, streak monitoring, and reflective prompts. Built to explore the psychology of habit formation and promote digital mindfulness.',
    techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'React Hook Form'],
    githubUrl: 'https://github.com/Ashif-107/daily2min',
    demoUrl: 'https://daily2min.vercel.app',
    status: 'Beta',
  }
];

const gameProjects = [
  {
    id: 6,
    title: 'Open World ARPG',
    description: 'A Open World Third Person Setting on a cool nature environment with dynamic lighning, wind and terrain, Breathtaking visuals and immersive gameplay.',
    techStack: ['Unity', 'C#', 'Blender'],
    githubUrl: 'https://github.com/Ashif-107/cyber-nexus',
    demoUrl: 'null',
    status: 'Released'
  },
  {
    id: 7,
    title: 'Quantum Runner',
    description: 'Physics-defying endless runner where players manipulate quantum states to navigate through dimensional barriers.',
    techStack: ['Unreal Engine', 'Blueprint', 'C++', 'Niagara'],
    githubUrl: 'https://github.com/Ashif-107/quantum-runner',
    demoUrl: 'https://quantum-runner-demo.com',
    status: 'Active'
  },
  {
    id: 8,
    title: 'Neural Wars',
    description: 'Strategic multiplayer battle arena where players command AI armies with machine learning-based unit behavior.',
    techStack: ['Godot', 'GDScript', 'Python', 'TensorFlow', 'WebRTC'],
    githubUrl: 'https://github.com/Ashif-107/neural-wars',
    demoUrl: null,
    status: 'Beta'
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const softwareSectionRef = useRef(null);
  const gamesSectionRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      // Optimized GSAP animations with reduced complexity
      const ctx = gsap.context(() => {
        // Simplified floating elements animation
        gsap.to('.cyber-float-1', {
          y: -50,
          rotation: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5
          }
        });

        gsap.to('.cyber-float-2', {
          y: 30,
          rotation: -90,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.3
          }
        });

        // Optimized section reveal animations
        gsap.fromTo(softwareSectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: softwareSectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        gsap.fromTo(gamesSectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gamesSectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Simplified card animations
        gsap.fromTo('.cyber-card',
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.projects-container',
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className={styles.projectsPage}>
      {/* Cyberpunk Decorations */}
      <CyberpunkDecorations />

      {/* Hero Section */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ashif Projects
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {"// INITIALIZING NEURAL_NETWORK..."}
            <br />
            {"// LOADING PROJECT_DATABASE..."}
            <br />
            {"// STATUS: ONLINE"}
          </motion.p>
        </div>
      </motion.section>

      <div className="projects-container">
        {/* Software Projects Section */}
        <section ref={softwareSectionRef} className={styles.projectSection}>
          <motion.div className={styles.sectionHeader}>
            <Code className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>SOFTWARE_DEVELOPMENT</h2>
            <div className={styles.sectionDivider}></div>
          </motion.div>

          <div className={styles.projectsGrid}>
            {softwareProjects.map((project, index) => (
              <CyberpunkProjectCard
                key={project.id}
                project={project}
                index={index}
                type="software"
              />
            ))}
          </div>
        </section>

        {/* Game Projects Section */}
        <section ref={gamesSectionRef} className={styles.projectSection}>
          <motion.div className={styles.sectionHeader}>
            <Gamepad2 className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>GAME_DEVELOPMENT</h2>
            <div className={styles.sectionDivider}></div>
          </motion.div>

          <div className={styles.projectsGrid}>
            {gameProjects.map((project, index) => (
              <CyberpunkProjectCard
                key={project.id}
                project={project}
                index={index}
                type="game"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}