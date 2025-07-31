import React from 'react';
import ServiceCard from './service-card';
import { services } from '@/config/serviceindex';

const MyServices = () => {
      return (
            <section id="services" className="py-20 bg-muted/30">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">My Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                              {services.map((service, index) => (
                                    <div
                                          key={index}
                                          className="animate-slide-up"
                                          style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                          <ServiceCard {...service} />
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default MyServices;
