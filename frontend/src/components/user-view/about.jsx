import React, { useEffect } from 'react';
import aboutprofileimage from "@/assets/aboutprofileimage.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutData } from '@/store/about.slice';
import AboutSkeleton from '../loaders/AboutSkeleton';

const AboutMe = () => {
      const { aboutData, isLoading } = useSelector((state) => state.about);
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(fetchAboutData());
      }, [dispatch]);

      const currentDatabaseData = aboutData ? aboutData : null;

      if (isLoading || !currentDatabaseData) {
            return <AboutSkeleton />;
      }

      return (
            <section id="about" className="py-20 border-b border-gray-700 ">
                  <div className="container mx-auto px-4 flex gap-10 lg:flex-row flex-col items-center">
                        <div className='md:basis-[35%] basis-full mx-auto flex items-center justify-center'>
                              <img
                                    src={currentDatabaseData?.aboutImage || aboutprofileimage}
                                    alt="About Me"
                                    className="md:w-96 md:h-96 w-56 h-56 object-center  rounded-full shadow-lg border-4 border-primary/10"
                              />
                        </div>
                        <div className="md:basis-[60%] basis-full mx-auto text-center">
                              <h2 className="text-4xl text-center font-bold mb-8 text-gradient animate-slide-up">About Me</h2>
                              <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed animate-slide-up flex flex-col items-center gap-6">
                                    <p className='text-justify'>{currentDatabaseData?.paragraphs}</p>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default AboutMe;
