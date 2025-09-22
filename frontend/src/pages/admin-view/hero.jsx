import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Download } from "lucide-react";

import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminHeroFormIndex } from "@/config/allFormIndex";
import { addUpdateHeroData, fetchHeroData } from "@/store/hero.slice";
import AnimatedText from "@/components/user-view/animated-text";
import { Skeleton } from "@/components/ui/skeleton";

const initialFormData = {
      name: "",
      title: "",
      description: "",
      resumeLink: "",
      profileImage: "",
};

const AdminViewHero = () => {
      const dispatch = useDispatch();
      const { heroData, isLoading } = useSelector((state) => state.hero);
      const [formData, setFormData] = useState(initialFormData);

      useEffect(() => {
            dispatch(fetchHeroData());
      }, [dispatch]);

      useEffect(() => {
            if (heroData && heroData.length > 0) {
                  const data = heroData[0];
                  setFormData({
                        name: data.name || "",
                        title: Array.isArray(data.title) ? data.title.join(", ") : "",
                        description: data.description || "",
                        resumeLink: data.resumeLink || "",
                        profileImage: data.profileImage || "",
                  });
            }
      }, [heroData]);

      const handleChange = (name, value) => {
            setFormData((prev) => ({
                  ...prev,
                  [name]: value,
            }));
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const submissionData = new FormData();

            submissionData.append("name", formData.name);
            submissionData.append("description", formData.description);
            submissionData.append("resumeLink", formData.resumeLink);
            submissionData.append("title", formData.title);

            if (formData.profileImage && formData.profileImage instanceof File) {
                  submissionData.append("profileImage", formData.profileImage);
            }

            try {
                  await dispatch(addUpdateHeroData(submissionData)).unwrap();
                  toast.success("Hero section updated successfully!");
                  dispatch(fetchHeroData());
            } catch (err) {
                  toast.error(err?.message || "Failed to update hero section.");
                  console.error("Error updating hero section:", err);
                  dispatch(fetchHeroData());
            }
      };

      const currentDatabaseData = heroData && heroData.length > 0 ? heroData[0] : null;

      return (
            <Fragment>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Current Hero Section (From Database)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          {isLoading ? (
                                                <div className="container mx-auto px-4 text-center">
                                                      <Skeleton className="w-60 h-60 rounded-full mx-auto mb-8" />
                                                      <Skeleton className="h-10 w-3/4 mx-auto mb-6" />
                                                      <Skeleton className="h-12 w-1/2 mx-auto mb-6" />
                                                      <Skeleton className="h-24 w-full max-w-2xl mx-auto mb-8" />
                                                      <Skeleton className="h-12 w-48 mx-auto" />
                                                </div>
                                          ) : currentDatabaseData ? (
                                                <div className="container mx-auto px-4 text-center">
                                                      <img
                                                            src={currentDatabaseData?.profileImage}
                                                            alt="Current Profile"
                                                            className="w-60 h-60 object-contain rounded-full mx-auto mb-8 border-4 border-primary/20"
                                                      />
                                                      <h1 className="text-3xl font-bold mb-6 text-gradient h-10">
                                                            {currentDatabaseData?.name}
                                                      </h1>
                                                      <AnimatedText
                                                            texts={currentDatabaseData?.title}
                                                            className="text-xl md:text-3xl mb-6 h-12"
                                                      />
                                                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                                                            {currentDatabaseData?.description}
                                                      </p>
                                                      {currentDatabaseData.resumeLink && (
                                                            <div className="flex justify-center">
                                                                  <a
                                                                        href={currentDatabaseData?.resumeLink}
                                                                        download
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                  >
                                                                        <Button
                                                                              size="lg"
                                                                              className="hero-gradient text-muted hover:opacity-90 accent-glow"
                                                                        >
                                                                              <Download className="w-5 h-5 mr-2" />
                                                                              Download Resume
                                                                        </Button>
                                                                  </a>
                                                            </div>
                                                      )}
                                                </div>
                                          ) : (
                                                <div className="text-center p-8 text-muted-foreground">
                                                      <p>No hero data found in the database.</p>
                                                      <p>Please use the form to add content.</p>
                                                </div>
                                          )}
                                    </CardContent>
                              </Card>
                        </div>

                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Update Hero Section</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          {isLoading ? (
                                                <div className="space-y-4">
                                                      <Skeleton className="h-10 w-full" />
                                                      <Skeleton className="h-10 w-full" />
                                                      <Skeleton className="h-24 w-full" />
                                                      <Skeleton className="h-10 w-full" />
                                                      <Skeleton className="h-10 w-32" />
                                                </div>
                                          ) : (
                                                <CommonForm
                                                      formControls={adminHeroFormIndex}
                                                      buttonText="Save Changes"
                                                      onSubmit={handleSubmit}
                                                      values={formData}
                                                      onChange={handleChange}
                                                      isLoading={isLoading}
                                                />
                                          )}
                                    </CardContent>
                              </Card>
                        </div>
                  </div>
            </Fragment>
      );
};

export default AdminViewHero;