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
    title: 'Neural Network Dashboard',
    description: 'Advanced machine learning interface with real-time data visualization and predictive analytics for enhanced decision making.',
    techStack: ['React', 'TypeScript', 'Python', 'TensorFlow', 'D3.js'],
    githubUrl: 'https://github.com/Ashif-107/neural-dashboard',
    demoUrl: 'https://neural-dashboard-demo.com',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Quantum Computing Simulator',
    description: 'Interactive quantum circuit builder with visualization tools for quantum algorithm development and testing.',
    techStack: ['Next.js', 'WebGL', 'Quantum.js', 'Three.js', 'SCSS'],
    githubUrl: 'https://github.com/Ashif-107/quantum-sim',
    demoUrl: 'https://quantum-sim-demo.com',
    status: 'Beta'
  },
  {
    id: 3,
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive cryptocurrency tracking and portfolio management with advanced charting and AI-powered insights.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js', 'WebSocket'],
    githubUrl: 'https://github.com/Ashif-107/crypto-analyzer',
    demoUrl: 'https://crypto-analyzer-demo.com',
    status: 'Active'
  },
  {
    id: 4,
    title: 'AI Code Assistant',
    description: 'Intelligent code completion and refactoring tool powered by GPT models with multi-language support.',
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI', 'Docker'],
    githubUrl: 'https://github.com/Ashif-107/ai-code-assistant',
    demoUrl: null,
    status: 'Development'
  }
];

const gameProjects = [
  {
    id: 5,
    title: 'Cyber Nexus',
    description: 'Immersive cyberpunk RPG with dynamic storylines, hacking mechanics, and neural interface combat systems.',
    techStack: ['Unity', 'C#', 'Blender', 'HLSL', 'Photon'],
    githubUrl: 'https://github.com/Ashif-107/cyber-nexus',
    demoUrl: 'https://cyber-nexus-demo.com',
    status: 'Released'
  },
  {
    id: 6,
    title: 'Quantum Runner',
    description: 'Physics-defying endless runner where players manipulate quantum states to navigate through dimensional barriers.',
    techStack: ['Unreal Engine', 'Blueprint', 'C++', 'Niagara'],
    githubUrl: 'https://github.com/Ashif-107/quantum-runner',
    demoUrl: 'https://quantum-runner-demo.com',
    status: 'Active'
  },
  {
    id: 7,
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
    // Cyberpunk floating elements parallax
    gsap.to('.cyber-float-1', {
      y: -100,
      rotation: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.cyber-float-2', {
      y: 50,
      rotation: -180,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });

    // Section reveal animations
    gsap.fromTo(softwareSectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gamesSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Staggered card animations
    gsap.fromTo('.cyber-card',
      {
        opacity: 0,
        y: 60,
        rotationX: -20,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-container',
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

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
        transition={{ duration: 1.2 }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Ashif Projects
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
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