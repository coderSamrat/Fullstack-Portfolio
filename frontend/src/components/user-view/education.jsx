import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { getAllEducation } from '../../store/education.slice';
import EducationSkeleton from '../loaders/EducationSkeleton';

const MyEducation = () => {
      const dispatch = useDispatch();
      const { educationData, isLoading } = useSelector((state) => state.education);

      useEffect(() => {
            dispatch(getAllEducation());
      }, [dispatch]);

      return (
            <section id="education" className="py-20 border-b border-gray-700">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Education & Certifications</h2>
                        <div className="max-w-4xl mx-auto space-y-8">
                              {isLoading || !educationData || educationData.length === 0 ? (
                                    <EducationSkeleton />
                              ) : (
                                    educationData?.map((item, index) => (
                                          <Card key={item._id || index} className="hover-lift tech-glow animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
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
                                                      {item.certification && item.certificateLink && (
                                                            <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                                                                  <Button variant="outline" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                                        View Certificate
                                                                  </Button>
                                                            </a>
                                                      )}
                                                </CardContent>
                                          </Card>
                                    ))
                              )}
                        </div>
                  </div>
            </section>
      );
}

export default MyEducation;
