import React from 'react';
import SkillCard from './skill-card';
import * as Icons from 'lucide-react';
import { skill } from '@/config/skill.js';

const MySkills = () => {
      return (
            <section id="skills" className="py-20 bg-muted/30">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Skills Overview</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                              {
                                    skill.map((skillCategory, index) => (
                                          <div key={index} className="animate-slide-up" style={{ animationDelay: `${(index + 3) * 0.2}s` }}>
                                                <SkillCard
                                                      title={skillCategory.category}
                                                      skills={skillCategory.skills.map(s => {
                                                            const Icon = Icons[s.iconName];
                                                            return {
                                                                  name: s.name,
                                                                  level: s.level,
                                                                  icon: Icon ? (
                                                                        <Icon className={`w-5 h-5 ${s.iconColor}`} />
                                                                  ) : null
                                                            };
                                                      })}
                                                />
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </section>
      );
}

export default MySkills;
