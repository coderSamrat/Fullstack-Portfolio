import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard = ({ title, description, icon, features }) => {
      return (
            <Card className="hover-lift tech-glow h-full">
                  <CardHeader className="text-center pb-2">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                              {icon}
                        </div>
                        <CardTitle className="text-xl mb-2">{title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{description}</p>
                  </CardHeader>
                  <CardContent>
                        <div className="space-y-2">
                              {features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                          <span className="text-sm text-muted-foreground">{feature}</span>
                                    </div>
                              ))}
                        </div>
                  </CardContent>
            </Card>
      );
};

export default ServiceCard;
