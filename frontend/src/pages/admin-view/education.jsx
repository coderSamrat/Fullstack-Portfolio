import CommonForm from '@/components/common/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { adminEducationFormIndex } from '@/config/allFormIndex';
import {
      createEducation,
      deleteEducation,
      getAllEducation,
      updateEducation,
} from '@/store/education.slice';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const initialFormData = {
      title: '',
      description: '',
      certification: false,
      certificateLink: '',
      date: '',
};

const AdminViewEducation = () => {
      const [formData, setFormData] = useState(initialFormData);
      const [editMode, setEditMode] = useState(false);
      const [editId, setEditId] = useState(null);
      const dispatch = useDispatch();
      const { educationData, isLoading } = useSelector((state) => state.education);
      console.log('Education Data:', educationData);


      useEffect(() => {
            dispatch(getAllEducation());
      }, [dispatch]);

      const handleChange = (name, value) => {
            setFormData((prev) => ({
                  ...prev,
                  [name]: value,
            }));
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  if (editMode) {
                        await dispatch(updateEducation({ id: editId, formData })).unwrap();
                        toast.success('Education entry updated successfully!');
                  } else {
                        await dispatch(createEducation(formData)).unwrap();
                        toast.success('Education entry created successfully!');
                  }
                  dispatch(getAllEducation());
                  resetForm();
            } catch (err) {
                  toast.error(err?.message || 'Failed to save education entry.');
                  console.error('Error saving education entry:', err);
            }
      };

      const handleEdit = (item) => {
            setEditMode(true);
            setEditId(item._id);
            setFormData({
                  title: item.title,
                  description: item.description,
                  certification: item.certification,
                  certificateLink: item.certificateLink,
                  date: item.date,
            });
      };

      const handleDelete = async (id) => {
            try {
                  await dispatch(deleteEducation(id)).unwrap();
                  toast.success('Education entry deleted successfully!');
                  dispatch(getAllEducation());
            } catch (err) {
                  toast.error(err?.message || 'Failed to delete education entry.');
                  console.error('Error deleting education entry:', err);
            }
      };

      const resetForm = () => {
            setFormData(initialFormData);
            setEditMode(false);
            setEditId(null);
      };

      return (
            <Fragment>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>{editMode ? 'Update Education' : 'Add Education'}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          <CommonForm
                                                formControls={adminEducationFormIndex}
                                                buttonText={editMode ? 'Update' : 'Add'}
                                                onSubmit={handleSubmit}
                                                values={formData}
                                                onChange={handleChange}
                                                isLoading={isLoading}
                                          />
                                          {editMode && (
                                                <Button variant="destructive" onClick={resetForm} className="mt-4 w-full">Cancel Edit</Button>
                                          )}
                                    </CardContent>
                              </Card>
                        </div>
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Education List</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          {isLoading && !educationData.length ? (
                                                <div className="space-y-4">
                                                      <Skeleton className="h-10 w-full" />
                                                      <Skeleton className="h-24 w-full" />
                                                      <Skeleton className="h-10 w-32" />
                                                </div>
                                          ) : educationData.length > 0 ? (
                                                <ul className="space-y-4">
                                                      {educationData.map((item) => (
                                                            <li key={item._id} className="p-4 border rounded-md space-y-4">
                                                                  <h3 className="font-bold">{item.title}</h3>
                                                                  <p>{item.description}</p>
                                                                  <p>Date: {item.date}</p>
                                                                  {item.certification && item.certificateLink && (
                                                                        <Button asChild variant="outline" className="hover:bg-primary text-muted-foreground hover:text-white transition-colors duration-300 ease-out">
                                                                              <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                                                                                    View Certificate
                                                                              </a>
                                                                        </Button>
                                                                  )}

                                                                  <div className="flex gap-2 mt-2">
                                                                        <Button
                                                                              variant={'outline'}
                                                                              className={'mr-2 hover:bg-primary/60 text-muted-foreground hover:text-white transition-colors duration-300 ease-out'}
                                                                              onClick={() => handleEdit(item)}
                                                                        >
                                                                              Edit
                                                                        </Button>
                                                                        <Button
                                                                              variant={'destructive'}
                                                                              className={'hover:bg-red-600/60 text-muted-foreground hover:text-white transition-colors duration-300 ease-out'}
                                                                              onClick={() => handleDelete(item._id)}
                                                                        >
                                                                              Delete
                                                                        </Button>
                                                                  </div>
                                                            </li>
                                                      ))}
                                                </ul>
                                          ) : (
                                                <div className="text-center p-8 text-muted-foreground">
                                                      <p>No education entries found.</p>
                                                </div>
                                          )}
                                    </CardContent>
                              </Card>
                        </div>
                  </div>
            </Fragment>
      );
};

export default AdminViewEducation;