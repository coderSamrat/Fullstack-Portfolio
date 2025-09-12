import ProjectCard from '@/components/user-view/project-card';
import { projects } from '@/config/project';
import React from 'react';

const MyAllProjectList = () => {
      return (
            <div className="relative mt-20">
                  <div className="container mx-auto p-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">All Projects</h2>
                        <div className="p-4 backdrop-blur-sm rounded-lg">
                              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                                    {projects.map((project, index) => (
                                          <div
                                                key={index}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 0.2}s` }}
                                          >
                                                <ProjectCard {...project} />
                                          </div>
                                    ))}
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
                        </div>
                  </div>
            </div>
      );
}

export default MyAllProjectList;
