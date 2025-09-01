import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profileimage.png";
import Hero from "@/components/user-view/hero";
import AboutMe from "@/components/user-view/about";
import MySkills from "@/components/user-view/skill";
import MyProjects from "@/components/user-view/projects";
import MyEducation from "@/components/user-view/education";
import MyServices from "@/components/user-view/service";

const MyPortfolio = () => {
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
                  <AboutMe />
                  <MyEducation />
                  <MySkills />
                  <MyProjects />
                  <MyServices />
            </div>
      );
};

export default MyPortfolio;
