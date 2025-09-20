import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { adminHeroFormIndex } from '@/config/allFormIndex';
import { addUpdateHeroData } from '@/store/hero.slice';
import { Download } from 'lucide-react';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const initialFormData = {
      name: "",
      title: "",
      description: "",
      resumeLink: "",
      profileImage: "",
};

const AdminViewHero = () => {
      const [formData, setFormData] = useState(initialFormData);
      const [errors, setErrors] = useState({});
      const [previewImage, setPreviewImage] = useState('');
      const dispatch = useDispatch();
      const { heroData: heroDataFromStore, isLoading } = useSelector((state) => state.hero);

      useEffect(() => {
            if (heroDataFromStore) {
                  const newHeroData = {
                        name: heroDataFromStore.name || '',
                        title: Array.isArray(heroDataFromStore.title)
                              ? heroDataFromStore.title.join(', ')
                              : heroDataFromStore.title || '',
                        description: heroDataFromStore.description || '',
                        resumeLink: heroDataFromStore.resumeLink || '',
                        profileImage: heroDataFromStore.profileImage || '',
                  };

                  setFormData(newHeroData);

                  setPreviewImage(
                        typeof heroDataFromStore.profileImage === 'object'
                              ? heroDataFromStore.profileImage.url || ''
                              : heroDataFromStore.profileImage || ''
                  );
            }
      }, [heroDataFromStore]);

      const handleChange = (name, value) => {
            setFormData(prev => ({
                  ...prev,
                  [name]: value
            }));

            if (name === 'profileImage' && value instanceof File) {
                  const reader = new FileReader();
                  reader.onload = () => setPreviewImage(reader.result);
                  reader.readAsDataURL(value);
            }
      };

      const validate = () => {
            const newErrors = {};
            adminHeroFormIndex.forEach(control => {
                  if (control.validation?.required && !formData[control.name]) {
                        newErrors[control.name] = `${control.label} is required`;
                  }
            });
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            if (!validate()) {
                  toast.error("Please fill all required fields");
                  return;
            }

            try {
                  const dataToSend = new FormData();
                  for (const key in formData) {
                        dataToSend.append(key, formData[key]);
                  }

                  const res = await dispatch(addUpdateHeroData(dataToSend)).unwrap();
                  toast.success(res?.message || "✅ Hero section updated!");
                  console.log("Hero data updated:", res);
            } catch (err) {
                  toast.error(`❌ Update failed: ${err?.message || 'Unknown error'}`);
                  console.error("Update failed:", err);
            }
      };

      return (
            <Fragment>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Live Preview */}
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Live Preview</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          <div className="container mx-auto px-4 z-10 text-center">
                                                <div className="animate-fade-in">
                                                      {previewImage && (
                                                            <img
                                                                  src={previewImage}
                                                                  alt={formData.name || "Profile"}
                                                                  className="w-60 h-60 object-contain rounded-full mx-auto mb-8 border-4 border-primary/20"
                                                            />
                                                      )}
                                                      <h1 className="text-3xl font-bold mb-6 text-gradient">
                                                            {formData.name}
                                                      </h1>
                                                      <div className="text-2xl md:text-3xl mb-6 h-12">
                                                            {formData.title}
                                                      </div>
                                                      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                                                            {formData.description}
                                                      </p>
                                                      {formData.resumeLink && (
                                                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                                                  <a
                                                                        href={formData.resumeLink}
                                                                        download
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                  >
                                                                        <Button size="lg" className="hero-gradient text-muted hover:opacity-90 accent-glow">
                                                                              <Download className="w-5 h-5 mr-2" />
                                                                              Download Resume
                                                                        </Button>
                                                                  </a>
                                                            </div>
                                                      )}
                                                </div>
                                          </div>
                                    </CardContent>
                              </Card>
                        </div>

                        {/* Update Form */}
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Update Hero Section</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          <CommonForm
                                                formControls={adminHeroFormIndex}
                                                buttonText={"Save Changes"}
                                                onSubmit={handleSubmit}
                                                values={formData}
                                                onChange={handleChange}
                                                errors={errors}
                                                isLoading={isLoading}
                                          />
                                    </CardContent>
                              </Card>
                        </div>
                  </div>
            </Fragment>
      );
};

export default AdminViewHero;