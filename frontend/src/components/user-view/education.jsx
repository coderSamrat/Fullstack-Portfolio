import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { myEducationAndTraining } from '@/config/eudcation-traning';

const MyEducation = () => {
      return (
            <section id="education" className="py-20">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Education & Certifications</h2>
                        <div className="max-w-4xl mx-auto space-y-8">
                              {myEducationAndTraining.map((item, index) => (
                                    <Card key={index} className="hover-lift card-gradient border-0 tech-glow animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                          <CardHeader>
                                                <CardTitle className="flex items-center justify-between">
                                                      <span>{item.title}</span>
                                                      {item.certification && (
                                                            <Badge className="hero-gradient text-muted">Certified</Badge>
                                                      )}
                                                </CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <p className="text-muted-foreground mb-4">{item.description}</p>
                                                {item.certification && (
                                                      <Button variant="outline" className="hover:bg-primary hover:text-muted transition-colors duration-300 ease-out">
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            View Certificate
                                                      </Button>
                                                )}
                                          </CardContent>
                                    </Card>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default MyEducation;
