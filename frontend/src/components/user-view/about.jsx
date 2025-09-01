import React from 'react';
import aboutprofileimage from "@/assets/aboutprofileimage.png";

const AboutMe = () => {
      return (
            <section id="about" className="py-20 bg-muted/30 ">
                  <div className="container mx-auto px-4 flex gap-10 lg:flex-row flex-col items-center">
                        <div className='md:basis-[35%] basis-full mx-auto flex items-center justify-center'>
                              <img 
                                    src={aboutprofileimage}
                                    alt="About Me"
                                    className="md:w-96 md:h-96 w-56 h-56 object-center  rounded-full shadow-lg border-4 border-primary/10"
                              />
                        </div>
                        <div className="md:basis-[60%] basis-full mx-auto text-center">
                              <h2 className="text-4xl text-center font-bold mb-8 text-gradient animate-slide-up">About Me</h2>
                              <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed animate-slide-up flex flex-col items-center gap-6">
                                    <p>
                                          I'm a passionate Full Stack Web Developer with a strong foundation in modern web technologies.
                                          Currently pursuing my B.Tech degree, I combine academic knowledge with practical experience
                                          to create innovative and efficient web solutions.
                                    </p>
                                    <p>
                                          My journey in web development began with a curiosity for how websites work, which quickly
                                          evolved into a deep passion for creating user-friendly applications. I specialize in the
                                          MERN stack and love bringing ideas to life through clean, maintainable code.
                                    </p>
                                    <p>
                                          When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                                          projects, or working on exciting personal projects that challenge my skills and creativity.
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default AboutMe;
