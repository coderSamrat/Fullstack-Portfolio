import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      status
}) => {
      return (
            <Card className="hover-lift tech-glow group">
                  <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                              <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                                    {title}
                              </CardTitle>
                              {status && (
                                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                                          {status}
                                    </Badge>
                              )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </CardHeader>
                  <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4 ">
                              {technologies.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                          {tech}
                                    </Badge>
                              ))}
                        </div>
                        <div className="flex flex-wrap space-x-2 gap-2">
                              {githubUrl && (
                                    <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
                                          <Button variant="outline" size="sm" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                          </Button>
                                    </Link>
                              )}
                              {liveUrl && (
                                    <Link to={liveUrl} target="_blank" rel="noopener noreferrer">
                                          <Button size="sm" className="hero-gradient text-muted hover:opacity-90 accent-glow">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                          </Button>
                                    </Link>
                              )}
                        </div>
                  </CardContent>
            </Card>
      );
};

export default ProjectCard;
