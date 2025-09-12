import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import React from 'react';

const AdminViewDashboard = () => {
      return (
            <div className="space-y-6">
                  <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className={"animate-slide-up hover-lift tech-glow"} style={{ animationDelay: `${0.2}s` }}>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                                    <Icons.FolderKanban className="h-4 w-4 text-muted-foreground" />
                              </CardHeader>
                              <CardContent>
                                    <div className="text-2xl font-bold">15</div>
                                    <p className="text-xs text-muted-foreground">+2 since last month</p>
                              </CardContent>
                        </Card>
                        <Card className={"animate-slide-up hover-lift tech-glow"} style={{ animationDelay: `${0.3}s` }}>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                                    <Icons.MessageSquare className="h-4 w-4 text-muted-foreground" />
                              </CardHeader>
                              <CardContent>
                                    <div className="text-2xl font-bold">3</div>
                                    <p className="text-xs text-muted-foreground">From 3 unique contacts</p>
                              </CardContent>
                        </Card>
                        <Card className={"animate-slide-up hover-lift tech-glow"} style={{ animationDelay: `${0.4}s` }}>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Portfolio Views</CardTitle>
                                    <Icons.Eye className="h-4 w-4 text-muted-foreground" />
                              </CardHeader>
                              <CardContent>
                                    <div className="text-2xl font-bold">1,287</div>
                                    <p className="text-xs text-muted-foreground">+5.1% from last month</p>
                              </CardContent>
                        </Card>
                  </div>
            </div>
      );
}

export default AdminViewDashboard;
