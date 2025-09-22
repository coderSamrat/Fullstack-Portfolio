import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedText from './animated-text';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import ContactMeBtn from './contact-btn';

const Hero = ({
      heroImage,
      data
}) => {
      const navigate = useNavigate();
      const handleContactClick = () => {
            window.scrollTo(0, 0);
            navigate('/portfolio/contact');
      };
      return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-4">
                  <div
                        className="absolute inset-0 z-0 dark:opacity-90 opacity-20"
                        style={{
                              backgroundImage: `url(${heroImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                        }}
                  />
                  <div className="absolute inset-0 hero-gradient opacity-5 z-0" />

                  <div className="container mx-auto px-4 z-10 text-center">
                        <div className="animate-fade-in">
                              <img
                                    src={data?.profileImage}
                                    alt={data?.name || "Profile"}
                                    className="w-60 h-60 object-contain rounded-full mx-auto mb-8 lg:mt-0 mt-6 border-4 border-primary/20 animate-float"
                              />
                              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                                    {data?.name || "Samrat Mallick"}
                              </h1>
                              <div className="text-2xl md:text-3xl mb-6 h-12">
                                    <AnimatedText texts={data?.title || []} className="text-muted-foreground" />
                              </div>
                              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                                    {data?.description || "I am a passionate Full Stack Developer with expertise in building dynamic and responsive web applications. I love turning ideas into reality using code."}
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                          href={data?.resumeLink}
                                          download
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <Button size="lg" className="hero-gradient text-muted hover:opacity-90 accent-glow">
                                                <Download className="w-5 h-5 mr-2" />
                                                Download Resume
                                          </Button>
                                    </a>
                                    <ContactMeBtn handleNavigateToContact={handleContactClick} />
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Hero;
