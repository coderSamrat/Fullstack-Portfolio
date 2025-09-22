import heroImage from "@/assets/hero-bg.jpg";
// import profileImage from "@/assets/profileimage.png";
import Hero from "@/components/user-view/hero";
import AboutMe from "@/components/user-view/about";
import MySkills from "@/components/user-view/skill";
import MyProjects from "@/components/user-view/projects";
import MyEducation from "@/components/user-view/education";
import MyServices from "@/components/user-view/service";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHeroData } from "@/store/hero.slice";
import { Skeleton } from "@/components/ui/skeleton";

const MyPortfolio = () => {

      const dispatch = useDispatch();
      const { heroData, isLoading } = useSelector((state) => state.hero);

      useEffect(() => {
            dispatch(fetchHeroData());
      }, [dispatch]);

      const currentDatabaseData = heroData && heroData.length > 0 ? heroData[0] : null;

      if (isLoading && !currentDatabaseData) {
            return (
                  <div className="w-full max-h-screen items-start">
                        <Skeleton className="w-full h-screen bg-background" />
                  </div>
            );
      }


      return (
            <div className="min-h-screen bg-background relative mt-20">
                  <Hero heroImage={heroImage} data={currentDatabaseData} />
                  <AboutMe />
                  <MyEducation />
                  <MySkills />
                  <MyProjects />
                  <MyServices />
            </div>
      );
};

export default MyPortfolio;
