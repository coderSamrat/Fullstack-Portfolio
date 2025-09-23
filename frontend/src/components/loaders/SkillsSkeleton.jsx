import React from 'react';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const SkillsSkeleton = () => (
      <>
            {[...Array(3)].map((_, i) => (
                  <Card key={i} className="p-6">
                        <Skeleton className="h-6 w-1/2 mb-4" />
                        <div className="space-y-4">
                              {[...Array(4)].map((_, j) => (
                                    <div key={j} className="flex items-center justify-between">
                                          <div className="flex items-center space-x-3">
                                                <Skeleton className="w-5 h-5 rounded-full" />
                                                <Skeleton className="h-4 w-24" />
                                          </div>
                                          <Skeleton className="h-4 w-12" />
                                    </div>
                              ))}
                        </div>
                  </Card>
            ))}
      </>
);

export default SkillsSkeleton;