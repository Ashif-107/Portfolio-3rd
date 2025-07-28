import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GitHubProject } from '@/hooks/useGitHubProjects';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: GitHubProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getTechStack = () => {
    const stack = [...project.topics];
    if (project.language && !stack.includes(project.language.toLowerCase())) {
      stack.unshift(project.language);
    }
    return stack.slice(0, 5); // Limit to 5 tags
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -8,
        rotateX: 5,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="card-cyber h-full p-6 bg-gradient-to-br from-card to-secondary/50 backdrop-blur-sm">
        <div className="space-y-4 h-full flex flex-col">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="cyber-title text-xl leading-tight group-hover:text-shadow-[0_0_10px_hsl(var(--cyber-yellow)/0.7)] transition-all duration-300">
                {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Star className="w-4 h-4" />
                <span>{project.stargazers_count}</span>
                <GitFork className="w-4 h-4" />
                <span>{project.forks_count}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Updated {formatDate(project.updated_at)}</span>
            </div>
          </div>

          {/* Description */}
          <div className="flex-grow">
            <p className="cyber-text text-sm leading-relaxed opacity-90">
              {project.description || 'No description available.'}
            </p>
          </div>

          {/* Tech Stack */}
          {getTechStack().length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-bold text-primary/80 uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {getTechStack().map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-primary/10 border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="btn-cyber flex-1 text-xs"
              onClick={() => window.open(project.html_url, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            
            {project.homepage && (
              <Button
                variant="outline"
                size="sm"
                className="btn-cyber flex-1 text-xs"
                onClick={() => window.open(project.homepage, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Cyber glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;