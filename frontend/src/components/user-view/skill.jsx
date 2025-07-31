import React from 'react';
import SkillCard from './skill-card';
import { backendSkills, frontendSkills, tools } from '@/config/skills';

const MySkills = () => {
      return (
            <section id="skills" className="py-20">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Skills & Technologies</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                              <div className="animate-slide-up">
                                    <SkillCard title="Frontend Development" skills={frontendSkills} />
                              </div>
                              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                                    <SkillCard title="Backend Development" skills={backendSkills} />
                              </div>
                              <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                                    <SkillCard title="Tools & Others" skills={tools} />
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default MySkills;
