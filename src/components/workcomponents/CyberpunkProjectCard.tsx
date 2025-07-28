import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap, Shield, Cpu } from 'lucide-react';
import styles from './CyberpunkProjectCard.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string | null;
  status: string;
}

interface CyberpunkProjectCardProps {
  project: Project;
  index: number;
  type: 'software' | 'game';
}

const CyberpunkProjectCard: React.FC<CyberpunkProjectCardProps> = ({
  project,
  index,
  type
}) => {

  return (
    <div className={styles.cardWrapper}>
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: 'easeOut'
        }}
        whileHover={{
          y: -15,
          rotateX: 8,
          rotateY: 3,
          scale: 1.02,
          zIndex: 999,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1200px",
          transformOrigin: "center center"
        }}
      >
        <div className={`${styles.cardContainer} cyber-card`}>
          {/* Cyberpunk Corner Elements */}
          <div className={styles.cornerTopLeft}></div>
          <div className={styles.cornerTopRight}></div>
          <div className={styles.cornerBottomLeft}></div>
          <div className={styles.cornerBottomRight}></div>

          {/* Card Content */}
          <div className={styles.cardContent}>
            {/* Header */}
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>
                {project.title}
                <div className={styles.titleGlow}></div>
              </h3>
            </div>

            {/* Description */}
            <p className={styles.cardDescription}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              <div className={styles.techLabel}>TECH_STACK:</div>
              <div className={styles.techTags}>
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    <motion.span
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 15px hsl(var(--cyber-yellow) / 0.5)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.cardActions}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className={styles.buttonIcon} />
                  <span>SOURCE</span>
                  <div className={styles.buttonGlow}></div>
                </motion.div>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.actionButton} ${styles.demoButton}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className={styles.buttonIcon} />
                    <span>DEMO</span>
                    <div className={styles.buttonGlow}></div>
                  </motion.div>
                </a>
              )}
            </div>

            {/* Cyberpunk Grid Pattern */}
            <div className={styles.gridPattern}></div>

            {/* Hover Glow Effect */}
            <div className={styles.hoverGlow}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CyberpunkProjectCard;