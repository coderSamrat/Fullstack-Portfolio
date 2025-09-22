import React from 'react';
import { Skeleton } from '../ui/skeleton';

const HeroSkeleton = () => (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-4">
            <div className="container mx-auto px-4 z-10 text-center">
                  <div className="animate-fade-in">
                        <Skeleton className="w-60 h-60 rounded-full mx-auto mb-8" />
                        <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
                        <Skeleton className="h-8 w-1/2 mx-auto mb-6" />
                        <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                              <Skeleton className="h-12 w-48" />
                              <Skeleton className="h-12 w-48" />
                        </div>
                  </div>
            </div>
      </section>
);

export default HeroSkeleton;
