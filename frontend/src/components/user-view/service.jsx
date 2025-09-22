import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCard from './service-card';
import * as Icons from 'lucide-react';
import { getAllServices } from '../../store/services.slice';
import ServicesSkeleton from '../loaders/ServicesSkeleton';

const MyServices = () => {
      const dispatch = useDispatch();
      const { servicesData, isLoading } = useSelector((state) => state.services);

      useEffect(() => {
            dispatch(getAllServices());
      }, [dispatch]);

      return (
            <section id="services" className="py-20">
                  <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">My Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                              {isLoading || !servicesData || servicesData.length === 0 ? (
                                    <ServicesSkeleton />
                              ) : (
                                    servicesData.map((service, index) => {
                                          const Icon = Icons[service.Icon];
                                          return (
                                                <div
                                                      key={service._id || index}
                                                      className="animate-slide-up" style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                                                >
                                                      <ServiceCard
                                                            title={service.title}
                                                            description={service.description}
                                                            icon={Icon ? <Icon className="w-8 h-8 text-primary" /> : null}
                                                            features={service.features}
                                                      />
                                                </div>
                                          )
                                    })
                              )}
                        </div>
                  </div>
            </section>
      );
}

export default MyServices;
