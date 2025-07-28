import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
      ExternalLink,
      Code2,
      Database,
      Server,
      Palette,
      Terminal,
      Coffee,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profileimage.jpeg";
import Footer from "@/components/user-view/footer";
import Header from "@/components/user-view/header";
import SkillCard from "@/components/user-view/skill-card";
import ProjectCard from "@/components/user-view/project-card";
import MyContact from "@/components/user-view/contact";
import Hero from "@/components/user-view/hero";

const MyPortfolio = () => {
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: ""
      });

      const skillTexts = [
            "ReactJS Developer",
            "NodeJS Expert",
            "Full Stack Engineer",
            "MongoDB Specialist",
            "Tailwind CSS Designer"
      ];

      const frontendSkills = [
            { name: "ReactJS", level: 90, icon: <Code2 className="w-5 h-5 text-blue-500" /> },
            { name: "JavaScript", level: 85, icon: <Terminal className="w-5 h-5 text-yellow-500" /> },
            { name: "HTML/CSS", level: 95, icon: <Palette className="w-5 h-5 text-orange-500" /> },
            { name: "Tailwind CSS", level: 88, icon: <Palette className="w-5 h-5 text-cyan-500" /> }
      ];

      const backendSkills = [
            { name: "NodeJS", level: 85, icon: <Server className="w-5 h-5 text-green-500" /> },
            { name: "ExpressJS", level: 82, icon: <Server className="w-5 h-5 text-gray-500" /> },
            { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5 text-green-600" /> },
            { name: "Java", level: 75, icon: <Coffee className="w-5 h-5 text-red-500" /> }
      ];

      const tools = [
            { name: "Git", level: 85, icon: <Terminal className="w-5 h-5 text-orange-500" /> },
            { name: "VSCode", level: 90, icon: <Code2 className="w-5 h-5 text-blue-600" /> },
            { name: "C Programming", level: 78, icon: <Terminal className="w-5 h-5 text-gray-600" /> }
      ];

      const projects = [
            {
                  title: "MyPortfolio Website",
                  description: "A responsive personal Myportfolio showcasing my skills and projects, built with modern React practices and beautiful animations.",
                  technologies: ["ReactJS", "Tailwind CSS", "TypeScript", "shadcn/ui"],
                  githubUrl: "#",
                  liveUrl: "#"
            },
            {
                  title: "Abar Khabo",
                  description: "AI-powered food delivery platform with intelligent recommendations and seamless ordering experience.",
                  technologies: ["ReactJS", "NodeJS", "MongoDB", "AI/ML", "Express"],
                  githubUrl: "#",
                  status: "In Progress"
            },
            {
                  title: "SM-Collection",
                  description: "Modern e-commerce platform for clothing with advanced search, filters, and secure payment integration.",
                  technologies: ["ReactJS", "NodeJS", "MongoDB", "Stripe", "Tailwind"],
                  githubUrl: "#",
                  status: "In Progress"
            }
      ];

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form submitted:", formData);
      };

      const scrollToSection = (id) => {
            const el = document.getElementById(id);
            if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
            }
      };

      return (
            <div className="min-h-screen bg-background relative">
                  <Hero scrollToSection={scrollToSection} heroImage={heroImage} profileImage={profileImage} skillTexts={skillTexts} />
                  <Header scrollToSection={scrollToSection} />

                  {/* About Section */}
                  <section id="about" className="py-20 bg-muted/30">
                        <div className="container mx-auto px-4">
                              <div className="max-w-4xl mx-auto text-center">
                                    <h2 className="text-4xl font-bold mb-8 text-gradient animate-slide-up">About Me</h2>
                                    <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed animate-slide-up">
                                          <p className="mb-6">
                                                I'm a passionate Full Stack Web Developer with a strong foundation in modern web technologies.
                                                Currently pursuing my B.Tech degree, I combine academic knowledge with practical experience
                                                to create innovative and efficient web solutions.
                                          </p>
                                          <p className="mb-6">
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

                  {/* Skills Section */}
                  <section id="skills" className="py-20">
                        <div className="container mx-auto px-4">
                              <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Skills & Technologies</h2>
                              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    <div className="animate-slide-up">
                                          <SkillCard title="Frontend Development" skills={frontendSkills} />
                                    </div>
                                    <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                                          <SkillCard title="Backend Development" skills={backendSkills} />
                                    </div>
                                    <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                                          <SkillCard title="Tools & Others" skills={tools} />
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Projects Section */}
                  <section id="projects" className="py-20 bg-muted/30">
                        <div className="container mx-auto px-4">
                              <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                    {projects.map((project, index) => (
                                          <div
                                                key={index}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 0.2}s` }}
                                          >
                                                <ProjectCard {...project} />
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Training & Education Section */}
                  <section id="education" className="py-20">
                        <div className="container mx-auto px-4">
                              <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Training & Education</h2>
                              <div className="max-w-4xl mx-auto space-y-8">
                                    <Card className="hover-lift card-gradient border-0 tech-glow">
                                          <CardHeader>
                                                <CardTitle className="flex items-center justify-between">
                                                      <span>Web Design Skill Development Program</span>
                                                      <Badge className="hero-gradient text-muted">Certified</Badge>
                                                </CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <p className="text-muted-foreground mb-4">
                                                      Comprehensive training program covering modern web design principles,
                                                      responsive layouts, and user experience design.
                                                </p>
                                                <Button variant="outline" className="hover:bg-primary hover:text-muted transition-colors duration-300 ease-out">
                                                      <ExternalLink className="w-4 h-4 mr-2" />
                                                      View Certificate
                                                </Button>
                                          </CardContent>
                                    </Card>

                                    <Card className="hover-lift card-gradient border-0 tech-glow">
                                          <CardHeader>
                                                <CardTitle>Bachelor of Technology (B.Tech)</CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <p className="text-muted-foreground">
                                                      Currently pursuing B.Tech degree with focus on computer science and
                                                      software engineering principles.
                                                </p>
                                          </CardContent>
                                    </Card>
                              </div>
                        </div>
                  </section>

                  {/* Contact Section */}
                  <MyContact formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

                  {/* Footer */}
                  <Footer scrollToSection={scrollToSection} />
            </div>
      );
};

export default MyPortfolio;
