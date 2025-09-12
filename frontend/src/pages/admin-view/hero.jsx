import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { adminHeroFormIndex } from '@/config/allFormIndex';
import React, { Fragment, useState } from 'react';

const initialFormData = {
      name: '',
      title: [],
      description: '',
      resumeLink: '',
      profileImage: '',
};

const AdminViewHero = () => {
      const [heroData, setHeroData] = useState(initialFormData);
      const [previewImage, setPreviewImage] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
      }

      return (
            <Fragment>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Live Preview</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          <div className="w-full rounded-lg bg-card p-8 text-center flex flex-col items-center">
                                                <img src="" alt="Profile Preview" className="w-40 h-40 rounded-full object-cover mb-6 border" />
                                                <h1 className="text-4xl font-bold mb-2"></h1>
                                                <h2 className="text-2xl text-primary font-semibold mb-4 h-8">

                                                </h2>
                                                <p className="text-muted-foreground mb-6 max-w-md mx-auto"></p>

                                          </div>
                                    </CardContent>
                              </Card>
                        </div>
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
                                          />
                                    </CardContent>
                              </Card>
                        </div>
                  </div>
            </Fragment>
      );
}

export default AdminViewHero;
