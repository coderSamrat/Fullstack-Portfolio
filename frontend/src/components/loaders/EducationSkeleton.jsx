import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const EducationSkeleton = () => (
      <div className="space-y-8">
            {[...Array(3)].map((_, index) => (
                  <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <CardHeader>
                              <CardTitle className="flex items-center justify-between">
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-6 w-20" />
                              </CardTitle>
                        </CardHeader>
                        <CardContent>
                              <Skeleton className="h-4 w-full mb-4" />
                              <Skeleton className="h-10 w-48" />
                        </CardContent>
                  </Card>
            ))}
      </div>
);

export default EducationSkeleton;
