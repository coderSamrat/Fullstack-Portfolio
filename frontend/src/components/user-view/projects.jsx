import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from './project-card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { getAllProjects } from '../../store/project.slice';
import ProjectsSkeleton from '../loaders/ProjectsSkeleton';

const MyProjects = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const { projectsData, isLoading } = useSelector((state) => state.project);

      useEffect(() => {
            dispatch(getAllProjects());
      }, [dispatch]);

      const goToProjectListingPage = () => {
            window.scrollTo(0, 0);
            navigate('/portfolio/projects');
      };

      return (
            <section id="projects" className="py-20 border-b border-gray-700">
                  <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                              {isLoading || !projectsData || projectsData.length === 0 ? (
                                    <ProjectsSkeleton />
                              ) : (
                                    projectsData.map((project, index) => (
                                          <div
                                                key={project._id || index}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 0.2}s` }}
                                          >
                                                <ProjectCard {...project} />
                                          </div>
                                    ))
                              )}
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
