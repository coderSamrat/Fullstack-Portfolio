import React from 'react';
import { Skeleton } from '../ui/skeleton';

const AboutSkeleton = () => (
      <section id="about" className="py-20 border-b border-gray-700 ">
            <div className="container mx-auto px-4 flex gap-10 lg:flex-row flex-col items-center">
                  <div className='md:basis-[35%] basis-full mx-auto flex items-center justify-center'>
                        <Skeleton className="md:w-96 md:h-96 w-56 h-56 rounded-full" />
                  </div>
                  <div className="md:basis-[60%] basis-full mx-auto text-center">
                        <Skeleton className="h-12 w-1/2 mx-auto mb-8" />
                        <div className="space-y-4">
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-3/4" />
                        </div>
                  </div>
            </div>
      </section>
);

export default AboutSkeleton;
