import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactFormIndex } from '@/config/allFormIndex';
import { Github, Linkedin, Mail } from 'lucide-react';
import React, { useState } from 'react';

const intialFormData = {
      name: '',
      email: '',
      mobile: '',
      message: '',
}
const MyContact = () => {
      const [formData, setFormData] = useState(intialFormData);
      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted with data:', formData);
      };
      return (
            <section id="contact" className="py-20 bg-muted/30 mt-16">
                  <div className="container mx-auto md:px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Get In Touch</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                              {/* Contact Form */}
                              <Card className="hover-lift card-gradient border-0 tech-glow">
                                    <CardHeader>
                                          <CardTitle>Send Me a Message</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          <CommonForm 
                                                formControls={contactFormIndex}
                                                formData={formData}
                                                setFormData={setFormData}
                                                onSubmit={handleSubmit}
                                                buttonText="Send Message"
                                          />
                                    </CardContent>
                              </Card>

                              {/* Contact Info */}
                              <div className="space-y-8">
                                    <Card className="hover-lift card-gradient border-0 tech-glow">
                                          <CardHeader>
                                                <CardTitle>Connect With Me</CardTitle>
                                          </CardHeader>
                                          <CardContent className="space-y-4">
                                                <div className="flex items-center flex-wrap space-x-4">
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
