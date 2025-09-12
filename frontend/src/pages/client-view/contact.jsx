import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ContactDetail from '@/components/user-view/contact-details';
import { contactFormIndex } from '@/config/allFormIndex';
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import profileImage from '@/assets/profileimage.jpeg';
import { contact } from '@/config/contactDetails';
import { Link } from 'react-router-dom';

const MyContact = () => {
      const handleSubmit = (formData) => {
            console.log('Form submitted with data:', formData);
      };
      return (
            <section id="contact" className="py-20 mt-10">
                  <div className="container mx-auto px-4">
                        <div className="w-full flex lg:flex-row flex-col items-center gap-4">
                              <h2 className="text-5xl font-bold text-center text-gradient">Get In Touch</h2>
                              <div className="w-44 h-1 bg-gradient-to-l from-primary to-secondary rounded-lg flex order-last lg:mt-10 mt-0"></div>
                        </div>
                        <div className='w-full flex flex-col md:flex-row items-center gap-4 mt-8'>
                              <div className='md:w-1/2 w-full flex flex-col items-center justify-center gap-8'>
                                    <img src={profileImage} alt="Samrat Mallick" className="w-40 h-40 rounded-full mx-auto border-4 border-primary/20" />
                                    <Card className="hover-lift tech-glow">
                                          <CardHeader className="text-center text-3xl font-bold text-gradient">
                                                <CardTitle>Connect & Location</CardTitle>
                                          </CardHeader>
                                          <CardContent className="space-y-4">
                                                {
                                                      contact.map((contact, index) => (
                                                            <ContactDetail key={index} label={contact.label} value={
                                                                  <Link to={contact.link} target="_blank" rel="noopener noreferrer">{contact.value}</Link>
                                                            } />
                                                      ))
                                                }
                                          </CardContent>
                                          <CardFooter className={'flex items-center gap-4 flex-wrap'}>
                                                <Button variant="outline" size="sm" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                      <Facebook className="w-5 h-5 mr-2" />
                                                      Facebook
                                                </Button>
                                                <Button variant="outline" size="sm" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                      <Instagram className="w-5 h-5 mr-2" />
                                                      Instagram
                                                </Button>
                                                <Button variant="outline" size="sm" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                      <Github className="w-5 h-5 mr-2" />
                                                      GitHub
                                                </Button>
                                                <Button variant="outline" size="sm" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                      <Linkedin className="w-5 h-5 mr-2" />
                                                      LinkedIn
                                                </Button>
                                          </CardFooter>
                                    </Card>

                              </div>
                              <div className='md:w-1/2 w-full flex items-center justify-center'>
                                    <Card className="hover-lift bg-background/30 hover:border-0 tech-glow w-full max-w-lg flex flex-col p-4 md:p-6 lg:p-8">
                                          <CardHeader className="text-2xl font-semibold">
                                                <CardTitle>Send Me a Message</CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <CommonForm
                                                      formControls={contactFormIndex}
                                                      onSubmit={handleSubmit}
                                                      buttonText="Send Message"
                                                />
                                          </CardContent>
                                    </Card>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default MyContact;