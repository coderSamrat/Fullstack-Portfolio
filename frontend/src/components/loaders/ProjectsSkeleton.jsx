import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const ProjectsSkeleton = () => (
    <>
        {[...Array(3)].map((_, i) => (
            <Card key={i} className="hover-lift tech-glow group">
                <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                        <CardTitle className="text-xl">
                            <Skeleton className="h-6 w-3/4" />
                        </CardTitle>
                        <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6" />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {[...Array(3)].map((_, j) => (
                            <Skeleton key={j} className="h-6 w-20 rounded-full" />
                        ))}
                    </div>
                    <div className="flex flex-wrap space-x-2 gap-2">
                        <Skeleton className="h-10 w-28 rounded-lg" />
                        <Skeleton className="h-10 w-28 rounded-lg" />
                    </div>
                </CardContent>
            </Card>
        ))}
    </>
);

export default ProjectsSkeleton;