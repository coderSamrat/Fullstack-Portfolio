import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

const MyContact = ({ formData, setFormData, handleSubmit }) => {
      return (
            <section id="contact" className="py-20 bg-muted/30">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Get In Touch</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                              {/* Contact Form */}
                              <Card className="hover-lift card-gradient border-0 tech-glow">
                                    <CardHeader>
                                          <CardTitle>Send Me a Message</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          <form onSubmit={handleSubmit} className="space-y-4">
                                                <Input
                                                      placeholder="Your Name"
                                                      value={formData.name}
                                                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                      required
                                                />
                                                <Input
                                                      type="email"
                                                      placeholder="Your Email"
                                                      value={formData.email}
                                                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                      required
                                                />
                                                <Textarea
                                                      placeholder="Your Message"
                                                      value={formData.message}
                                                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                                      rows={5}
                                                      required
                                                />
                                                <Button type="submit" className="w-full hero-gradient text-muted hover:opacity-90">
                                                      Send Message
                                                </Button>
                                          </form>
                                    </CardContent>
                              </Card>

                              {/* Contact Info */}
                              <div className="space-y-8">
                                    <Card className="hover-lift card-gradient border-0 tech-glow">
                                          <CardHeader>
                                                <CardTitle>Connect With Me</CardTitle>
                                          </CardHeader>
                                          <CardContent className="space-y-4">
                                                <div className="flex space-x-4">
                                                      <Button variant="outline" size="lg" className="hover:bg-primary hover:text-muted transition-colors duration-300 ease-out">
                                                            <Github className="w-5 h-5 mr-2" />
                                                            GitHub
                                                      </Button>
                                                      <Button variant="outline" size="lg" className="hover:bg-primary hover:text-muted transition-colors duration-300 ease-out">
                                                            <Linkedin className="w-5 h-5 mr-2" />
                                                            LinkedIn
                                                      </Button>
                                                </div>
                                                <div className="flex items-center space-x-2 text-muted-foreground">
                                                      <Mail className="w-5 h-5" />
                                                      <span>samratmallick@email.com</span>
                                                </div>
                                          </CardContent>
                                    </Card>

                                    <Card className="hover-lift card-gradient border-0 tech-glow">
                                          <CardHeader>
                                                <CardTitle>Location</CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <p className="text-muted-foreground">
                                                      Banbania, Habra<br />
                                                      North 24 Parganas<br />
                                                      West Bengal, 743263<br />
                                                      India
                                                </p>
                                          </CardContent>
                                    </Card>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default MyContact;
