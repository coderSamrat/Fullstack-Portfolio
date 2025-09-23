import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkillCard from './skill-card';
import * as Icons from 'lucide-react';
import SkillsSkeleton from '../loaders/SkillsSkeleton';
import { getAllSkillCategories } from '@/store/skills.slice';

const MySkills = () => {
      const dispatch = useDispatch();
      const { skillsData, isLoading } = useSelector((state) => state.skills);

      useEffect(() => {
            dispatch(getAllSkillCategories());
      }, [dispatch]);

      return (
            <section id="skills" className="py-20 border-b border-gray-700">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Skills Overview</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                              {isLoading || !skillsData || skillsData.length === 0 ? (
                                    <SkillsSkeleton />
                              ) : (
                                    skillsData.map((skillCategory, index) => (
                                          <div key={skillCategory._id || index} className="animate-slide-up" style={{ animationDelay: `${(index + 3) * 0.2}s` }}>
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
                              )}
                        </div>
                  </div>
            </section>
      );
}

export default MySkills;
