import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillCard = ({ title, skills }) => {
      return (
            <Card className="p-6 hover-lift tech-glow">
                  <h3 className="text-xl font-semibold mb-4 text-gradient">{title}</h3>
                  <div className="space-y-4">
                        {skills.map((skill, index) => (
                              <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                          {skill.icon}
                                          <span className="font-medium">{skill.name}</span>
                                    </div>
                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                          {skill.level}%
                                    </Badge>
                              </div>
                        ))}
                  </div>
            </Card>
      );
};

export default SkillCard;
