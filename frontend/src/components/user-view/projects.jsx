import React from 'react';
import ProjectCard from './project-card';
import { projects } from '@/config/project';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {
      const navigate = useNavigate();
      const goToProjectListingPage = () => {
            window.scrollTo(0, 0);
            navigate('/portfolio/projects');
      };
      return (
            <section id="projects" className="py-20 bg-muted/30">
                  <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                              {projects.map((project, index) => (
                                    <div
                                          key={index}
                                          className="animate-slide-up"
                                          style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                          <ProjectCard {...project} />
                                    </div>
                              ))}
                        </div>
                        <Button
                              onClick={goToProjectListingPage}
                              size="lg"
                              className="mt-8 hero-gradient text-muted hover:opacity-90 accent-glow"
                        >
                              View All Projects
                        </Button>
                  </div>
            </section>
      );
}

export default MyProjects;
