import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const ServicesSkeleton = () => (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
                  <Card key={i} className="h-full">
                        <CardHeader className="text-center pb-2">
                              <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full" />
                              <CardTitle className="text-xl mb-2">
                                    <Skeleton className="h-6 w-3/4 mx-auto" />
                              </CardTitle>
                              <Skeleton className="h-4 w-full mx-auto" />
                              <Skeleton className="h-4 w-5/6 mx-auto" />
                        </CardHeader>
                        <CardContent>
                              <div className="space-y-2">
                                    {[...Array(3)].map((_, j) => (
                                          <div key={j} className="flex items-center space-x-2">
                                                <Skeleton className="w-3 h-3 rounded-full" />
                                                <Skeleton className="h-4 w-full" />
                                          </div>
                                    ))}
                              </div>
                        </CardContent>
                  </Card>
            ))}
      </div>
);

export default ServicesSkeleton;
