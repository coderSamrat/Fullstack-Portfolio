import React from 'react';
import AnimatedText from './animated-text';
import { Button } from '../ui/button';
import { Download, Mail } from 'lucide-react';

const Hero = ({
      scrollToSection,
      heroImage,
      profileImage,
      skillTexts
}) => {
      return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                  <div
                        className="absolute inset-0 z-0 opacity-40"
                        style={{
                              backgroundImage: `url(${heroImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                        }}
                  />
                  <div className="absolute inset-0 hero-gradient opacity-5 z-0" />

                  <div className="container mx-auto px-4 z-10 text-center py-4">
                        <div className="animate-fade-in">
                              <img
                                    src={profileImage}
                                    alt="Samrat Mallick"
                                    className="w-56 h-56 rounded-full mx-auto mb-8 lg:mt-0 mt-6 border-4 border-primary/20 animate-float"
                              />
                              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                                    Samrat Mallick
                              </h1>
                              <div className="text-2xl md:text-3xl mb-6 h-12">
                                    <AnimatedText texts={skillTexts} className="text-muted-foreground" />
                              </div>
                              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                                    Passionate Full Stack Developer crafting innovative web solutions with modern technologies
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button size="lg" className="hero-gradient text-muted hover:opacity-90 accent-glow">
                                          <Download className="w-5 h-5 mr-2" />
                                          Download Resume
                                    </Button>
                                    <Button
                                          variant="outline"
                                          size="lg"
                                          onClick={() => scrollToSection("contact")}
                                          className="hover:bg-primary hover:text-muted transition-colors duration-300 ease-out"
                                    >
                                          <Mail className="w-5 h-5 mr-2" />
                                          Contact Me
                                    </Button>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Hero;
