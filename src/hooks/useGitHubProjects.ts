import { useState, useEffect } from 'react';
import axios from 'axios';

export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export interface CategorizedProjects {
  software: GitHubProject[];
  games: GitHubProject[];
}

export const useGitHubProjects = (username: string) => {
  const [projects, setProjects] = useState<CategorizedProjects>({ software: [], games: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`
        );
        
        const repos: GitHubProject[] = response.data;
        
        // Categorize projects based on topics and language
        const categorized = repos.reduce(
          (acc, repo) => {
            const isGameDev = repo.topics.some(topic => 
              ['game', 'unity', 'unreal', 'godot', 'gamedev', 'gaming', 'c#', 'csharp'].includes(topic.toLowerCase())
            ) || repo.language === 'C#' || repo.name.toLowerCase().includes('game');
            
            if (isGameDev) {
              acc.games.push(repo);
            } else {
              acc.software.push(repo);
            }
            
            return acc;
          },
          { software: [] as GitHubProject[], games: [] as GitHubProject[] }
        );
        
        setProjects(categorized);
        setError(null);
      } catch (err) {
        setError('Failed to fetch GitHub projects');
        console.error('Error fetching GitHub projects:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProjects();
    }
  }, [username]);

  return { projects, loading, error };
};