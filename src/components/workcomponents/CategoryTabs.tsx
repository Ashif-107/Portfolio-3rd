import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

interface CategoryTabsProps {
  activeCategory: 'software' | 'games';
  onCategoryChange: (category: 'software' | 'games') => void;
  softwareCount: number;
  gamesCount: number;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
  softwareCount,
  gamesCount
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex bg-secondary/20 rounded-lg p-2 border border-primary/20">
        <div className="relative">
          <motion.div
            initial={false}
            animate={{
              x: activeCategory === 'software' ? 0 : '100%'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 bg-primary rounded-md cyber-glow" />
          </motion.div>
        </div>

        <Button
          variant={activeCategory === 'software' ? 'default' : 'ghost'}
          onClick={() => onCategoryChange('software')}
          className={`
            relative z-10 px-6 py-3 font-bold transition-all duration-300
            ${activeCategory === 'software'
              ? 'text-primary-foreground bg-transparent'
              : 'text-primary hover:text-primary-foreground hover:bg-primary/20'
            }
          `}
        >
          Software Development
          <span className="ml-2 text-sm opacity-75">({softwareCount})</span>
        </Button>

        <Button
          variant={activeCategory === 'games' ? 'default' : 'ghost'}
          onClick={() => onCategoryChange('games')}
          className={`
            relative z-10 px-6 py-3 font-bold transition-all duration-300
            ${activeCategory === 'games'
              ? 'text-primary-foreground bg-transparent'
              : 'text-primary hover:text-primary-foreground hover:bg-primary/20'
            }
          `}
        >
          Game Development
          <span className="ml-2 text-sm opacity-75">({gamesCount})</span>
        </Button>
      </div>
    </div>
  );
};

export default CategoryTabs;