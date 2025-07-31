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
import ProjectCard from "@/components/user-view/project-card";
import Hero from "@/components/user-view/hero";
import AboutMe from "@/components/user-view/about";
import MySkills from "@/components/user-view/skill";
import MyProjects from "@/components/user-view/projects";

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

      

      return (
            <div className="min-h-screen bg-background relative mt-20">
                  <Hero heroImage={heroImage} profileImage={profileImage} skillTexts={skillTexts} />
                  {/* <Header scrollToSection={scrollToSection} /> */}

                  {/* About Section */}
                  <AboutMe />

                  {/* Skills Section */}
                  <MySkills />

                  {/* Projects Section */}
                  <MyProjects />

                  {/* Training & Education Section */}
                  {/* <section id="education" className="py-20">
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
                  </section> */}
            </div>
      );
};

export default MyPortfolio;
