import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { adminSkillCategoryFormIndex, adminSkillFormIndex } from '@/config/allFormIndex';
import {
      createSkillCategory,
      addSkillToCategory,
      getAllSkillCategories,
      deleteSkillCategory,
      deleteSkillFromCategory,
      updateSkillToCategory,
} from '@/store/skills.slice';
import { Skeleton } from '@/components/ui/skeleton';

const initialCategoryFormData = {
      category: ''
};

const initialSkillFormData = {
      category: '',
      name: '',
      level: '',
      iconName: '',
      iconColor: ''
};

const AdminViewSkills = () => {
      const dispatch = useDispatch();
      const { isLoading, skillsData, error } = useSelector((state) => state.skills);

      const [categoryFormData, setCategoryFormData] = useState(initialCategoryFormData);
      const [skillFormData, setSkillFormData] = useState(initialSkillFormData);
      const [showEditForm, setShowEditForm] = useState(false);
      const [currentEditingSkill, setCurrentEditingSkill] = useState(null);

      useEffect(() => {
            dispatch(getAllSkillCategories());
      }, [dispatch]);

      const handleCategoryFormChange = (name, value) => {
            setCategoryFormData({ ...categoryFormData, [name]: value });
      };

      const handleSkillFormChange = (name, value) => {
            setSkillFormData({ ...skillFormData, [name]: value });
      };

      const handleEditSkillFormChange = (name, value) => {
            setCurrentEditingSkill({ ...currentEditingSkill, skillData: { ...currentEditingSkill.skillData, [name]: value } });
      };

      const handleCreateCategorySubmit = (e) => {
            e.preventDefault();
            dispatch(createSkillCategory({ category: categoryFormData.category, skills: [] }))
                  .then(() => {
                        toast.success('Category created successfully');
                        setCategoryFormData(initialCategoryFormData);
                        dispatch(getAllSkillCategories());
                  })
                  .catch((err) => toast.error(err.message || 'Failed to create category'));
      };

      const handleAddSkillSubmit = (e) => {
            e.preventDefault();
            const selectedCategory = skillsData.find(cat => cat.category === skillFormData.category);
            if (selectedCategory) {
                  const { category, ...skillDetails } = skillFormData;
                  dispatch(addSkillToCategory({ id: selectedCategory._id, skillData: skillDetails }))
                        .then(() => {
                              toast.success('Skill added successfully');
                              setSkillFormData(initialSkillFormData);
                              dispatch(getAllSkillCategories());
                        })
                        .catch((err) => toast.error(err.message || 'Failed to add skill'));
            } else {
                  toast.error('Please select a valid category.');
            }
      };

      const handleUpdateSkillSubmit = (e) => {
            e.preventDefault();
            if (currentEditingSkill) {
                  const { categoryId, skillId, skillData } = currentEditingSkill;
                  dispatch(updateSkillToCategory({ categoryId, skillId, skillData }))
                        .then(() => {
                              toast.success('Skill updated successfully');
                              setShowEditForm(false);
                              setCurrentEditingSkill(null);
                              dispatch(getAllSkillCategories());
                        })
                        .catch((err) => toast.error(err.message || 'Failed to update skill'));
            }
      };

      const handleDeleteCategory = (categoryId) => {
            dispatch(deleteSkillCategory(categoryId))
                  .then(() => {
                        toast.success('Category deleted successfully');
                        dispatch(getAllSkillCategories());
                  })
                  .catch((err) => toast.error(err.message || 'Failed to delete category'));
      };

      const handleDeleteSkill = (categoryId, skillId) => {
            dispatch(deleteSkillFromCategory({ categoryId, skillId }))
                  .then(() => {
                        toast.success('Skill deleted successfully');
                        dispatch(getAllSkillCategories());
                  })
                  .catch((err) => toast.error(err.message || 'Failed to delete skill'));
      };

      const handleEditSkill = (categoryId, skillId, skillItem) => {
            setCurrentEditingSkill({ categoryId, skillId, skillData: { ...skillItem } });
            setShowEditForm(true);
      };

      const skillOptions = skillsData.map(cat => ({ label: cat.category, value: cat.category }));

      return (
            <Fragment>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div>
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Existing Skills</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                          {isLoading ? (
                                                <div className="space-y-4">
                                                      <Skeleton className="h-12 w-full" />
                                                      <Skeleton className="h-12 w-full" />
                                                      <Skeleton className="h-12 w-full" />
                                                </div>
                                          ) : skillsData && skillsData.length > 0 ? (
                                                skillsData.map((categoryItem) => (
                                                      <Card key={categoryItem._id} className="mb-4">
                                                            <CardHeader className="flex flex-row items-center justify-between">
                                                                  <CardTitle className="text-lg">{categoryItem.category}</CardTitle>
                                                                  <Button
                                                                        variant="destructive"
                                                                        size="sm"
                                                                        onClick={() => handleDeleteCategory(categoryItem._id)}
                                                                        disabled={isLoading}
                                                                  >
                                                                        Delete Category
                                                                  </Button>
                                                            </CardHeader>
                                                            <CardContent>
                                                                  <ul className="space-y-2">
                                                                        {categoryItem.skills && categoryItem.skills.length > 0 ? (
                                                                              categoryItem.skills.map((skillItem) => (
                                                                                    <li key={skillItem._id} className="flex items-center justify-between p-2 rounded-md bg-muted/50">
                                                                                          <div>
                                                                                                <p className="font-semibold">{skillItem.name}</p>
                                                                                                <p className="text-sm text-muted-foreground">Level: {skillItem.level}%</p>
                                                                                          </div>
                                                                                          <div className="flex gap-2">
                                                                                                <Button
                                                                                                      variant="outline"
                                                                                                      size="sm"
                                                                                                      onClick={() => handleEditSkill(categoryItem._id, skillItem._id, skillItem)}
                                                                                                      disabled={isLoading}
                                                                                                >
                                                                                                      Edit
                                                                                                </Button>
                                                                                                <Button
                                                                                                      variant="destructive"
                                                                                                      size="sm"
                                                                                                      onClick={() => handleDeleteSkill(categoryItem._id, skillItem._id)}
                                                                                                      disabled={isLoading}
                                                                                                >
                                                                                                      Delete
                                                                                                </Button>
                                                                                          </div>
                                                                                    </li>
                                                                              ))
                                                                        ) : (
                                                                              <p className="text-muted-foreground">No skills in this category.</p>
                                                                        )}
                                                                  </ul>
                                                            </CardContent>
                                                      </Card>
                                                ))
                                          ) : (
                                                <div className="text-center p-8 text-muted-foreground">
                                                      <p>No skill categories found.</p>
                                                </div>
                                          )}
                                    </CardContent>
                              </Card>
                        </div>

                        <div>
                              {showEditForm && currentEditingSkill ? (
                                    <Card>
                                          <CardHeader>
                                                <CardTitle>Edit Skill</CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <CommonForm
                                                      formControls={adminSkillFormIndex.filter(c => c.name !== 'category')}
                                                      values={currentEditingSkill.skillData}
                                                      onChange={handleEditSkillFormChange}
                                                      onSubmit={handleUpdateSkillSubmit}
                                                      buttonText="Update Skill"
                                                      isLoading={isLoading}
                                                />
                                                <Button variant="outline" className="mt-4" onClick={() => { setShowEditForm(false); setCurrentEditingSkill(null); }}>
                                                      Cancel
                                                </Button>
                                          </CardContent>
                                    </Card>
                              ) : (
                                    <Fragment>
                                          <Card className="mb-8">
                                                <CardHeader>
                                                      <CardTitle>Add New Skill Category</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                      <CommonForm
                                                            formControls={adminSkillCategoryFormIndex}
                                                            values={categoryFormData}
                                                            onChange={handleCategoryFormChange}
                                                            onSubmit={handleCreateCategorySubmit}
                                                            buttonText="Add Category"
                                                            isLoading={isLoading}
                                                      />
                                                </CardContent>
                                          </Card>
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle>Add New Skill</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                      <CommonForm
                                                            formControls={adminSkillFormIndex.map(c => c.name === 'category' ? { ...c, componentType: 'select', options: skillOptions } : c)}
                                                            values={skillFormData}
                                                            onChange={handleSkillFormChange}
                                                            onSubmit={handleAddSkillSubmit}
                                                            buttonText="Add Skill"
                                                            isLoading={isLoading}
                                                      />
                                                </CardContent>
                                          </Card>
                                    </Fragment>
                              )}
                        </div>
                  </div>
            </Fragment>
      );
};

export default AdminViewSkills;
