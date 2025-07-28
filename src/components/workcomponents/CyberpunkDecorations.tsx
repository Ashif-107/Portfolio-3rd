import React from 'react';
import { motion } from 'framer-motion';
import styles from './CyberpunkDecorations.module.scss';

const CyberpunkDecorations: React.FC = () => {
  return (
    <div className={styles.decorationsContainer}>
      {/* Floating Cyberpunk Elements */}
      <div className={`${styles.floatingElement} cyber-float-1`}>
        <svg className={styles.hudElement} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--cyber-yellow))" strokeWidth="2" opacity="0.6" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.4" />
          <line x1="100" y1="20" x2="100" y2="40" stroke="hsl(var(--cyber-yellow))" strokeWidth="2" opacity="0.7" />
          <line x1="100" y1="160" x2="100" y2="180" stroke="hsl(var(--cyber-yellow))" strokeWidth="2" opacity="0.7" />
          <line x1="20" y1="100" x2="40" y2="100" stroke="hsl(var(--cyber-yellow))" strokeWidth="2" opacity="0.7" />
          <line x1="160" y1="100" x2="180" y2="100" stroke="hsl(var(--cyber-yellow))" strokeWidth="2" opacity="0.7" />
        </svg>
      </div>

      <div className={`${styles.floatingElement} ${styles.floatingElement2} cyber-float-2`}>
        <svg className={styles.hudElement} viewBox="0 0 150 150">
          <rect x="25" y="25" width="100" height="100" fill="none" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.5" />
          <rect x="35" y="35" width="80" height="80" fill="none" stroke="hsl(var(--cyber-yellow))" strokeWidth="2" opacity="0.3" />
          <line x1="25" y1="25" x2="35" y2="35" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.6" />
          <line x1="125" y1="25" x2="115" y2="35" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="125" x2="35" y2="115" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.6" />
          <line x1="125" y1="125" x2="115" y2="115" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      {/* Glitchy Lines */}
      <div className={styles.glitchLine1}>
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className={styles.glitchLine2}>
        <motion.div
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scaleY: [1, 1.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Neon Bars */}
      <div className={styles.neonBars}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={styles.neonBar}>
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                height: ['2px', '4px', '2px']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          </div>
        ))}
      </div>

      {/* UI Fragments */}
      <div className={styles.uiFragments}>
        <div className={styles.fragment1}>
          <motion.div
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg viewBox="0 0 60 60">
              <polygon
                points="30,5 55,25 45,50 15,50 5,25"
                fill="none"
                stroke="hsl(var(--cyber-yellow))"
                strokeWidth="1"
                opacity="0.4"
              />
              <circle cx="30" cy="30" r="8" fill="hsl(var(--cyber-yellow))" opacity="0.3" />
            </svg>
          </motion.div>
        </div>

        <div className={styles.fragment2}>
          <motion.div
            animate={{
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 80 30">
              <rect x="5" y="5" width="70" height="20" fill="none" stroke="hsl(var(--cyber-yellow))" strokeWidth="1" opacity="0.5" />
              <rect x="10" y="8" width="15" height="4" fill="hsl(var(--cyber-yellow))" opacity="0.6" />
              <rect x="30" y="8" width="25" height="4" fill="hsl(var(--cyber-yellow))" opacity="0.4" />
              <rect x="60" y="8" width="10" height="4" fill="hsl(var(--cyber-yellow))" opacity="0.7" />
              <rect x="10" y="16" width="60" height="2" fill="hsl(var(--cyber-yellow))" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Background Grid */}
      <div className={styles.backgroundGrid}>
        <svg className={styles.gridSvg} viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(var(--cyber-yellow))" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default CyberpunkDecorations;