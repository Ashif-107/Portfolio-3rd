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
  const getStatusIcon = () => {
    switch (project.status) {
      case 'Active':
        return <Zap className={styles.statusIcon} />;
      case 'Beta':
        return <Shield className={styles.statusIcon} />;
      case 'Development':
        return <Cpu className={styles.statusIcon} />;
      default:
        return <Zap className={styles.statusIcon} />;
    }
  };

  const getStatusClass = () => {
    switch (project.status) {
      case 'Active':
        return styles.statusActive;
      case 'Beta':
        return styles.statusBeta;
      case 'Development':
        return styles.statusDev;
      case 'Released':
        return styles.statusReleased;
      default:
        return styles.statusActive;
    }
  };

  return (
    <motion.div
      className={`${styles.cardContainer} cyber-card`}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
    >
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
              <motion.span
                key={techIndex}
                className={styles.techTag}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px hsl(var(--cyber-yellow) / 0.5)'
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.cardActions}>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className={styles.buttonIcon} />
            <span>SOURCE</span>
            <div className={styles.buttonGlow}></div>
          </motion.a>

          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.demoButton}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className={styles.buttonIcon} />
              <span>DEMO</span>
              <div className={styles.buttonGlow}></div>
            </motion.a>
          )}
        </div>

        {/* Cyberpunk Grid Pattern */}
        <div className={styles.gridPattern}></div>
        
        {/* Hover Glow Effect */}
        <div className={styles.hoverGlow}></div>
      </div>
    </motion.div>
  );
};

export default CyberpunkProjectCard;