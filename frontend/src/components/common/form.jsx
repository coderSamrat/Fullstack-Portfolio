import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const types = {
      Input: 'input',
      Textarea: 'textarea'
};

const CommonForm = ({
      formControls,
      onSubmit,
      buttonText
}) => {
      const initialValues = formControls.reduce((acc, control) => {
            acc[control.name] = '';
            return acc;
      }, {});

      const validationSchema = Yup.object(
            formControls.reduce((acc, control) => {
                  let schema = Yup.string();
                  if (control.validation) {
                        if (control.validation.required) {
                              schema = schema.required(`${control.label} is required`);
                        }
                        if (control.validation.email) {
                              schema = schema.email(`Invalid email format for ${control.label}`);
                        }
                  }
                  acc[control.name] = schema;
                  return acc;
            }, {})
      );


      const formik = useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values) => {
                  onSubmit(values);
            },
      });

      const renderInputsByComponentsType = (getControlItems) => {
            const { name, placeholder, type, componentType, rows, label } = getControlItems;
            const fieldProps = formik.getFieldProps(name);

            const commonProps = {
                  ...fieldProps,
                  placeholder,
                  id: name,
            };

            return (
                  <div className="grid w-full gap-1.5">
                        <Label htmlFor={name}>{label}</Label>
                        {componentType === types.Textarea ? (
                              <Textarea
                                    {...commonProps}
                                    rows={rows}
                                    className={'resize-none'}
                              />
                        ) : (
                              <Input
                                    {...commonProps}
                                    type={type}
                                    className={`${type === 'number' ? 'hide-number-arrows' : ''}`}
                              />
                        )}
                        {formik.touched[name] && formik.errors[name] ? (
                              <div className="text-red-500 text-sm">{formik.errors[name]}</div>
                        ) : null}
                  </div>
            );
      };

      return (
            <form onSubmit={formik.handleSubmit} className='space-y-4'>
                  <div className='flex flex-col gap-6'>
                        {
                              formControls.map((controlItems) => (
                                    <div
                                          key={controlItems.name}
                                    >
                                          {
                                                renderInputsByComponentsType(controlItems)
                                          }
                                    </div>
                              ))
                        }
                  </div>
                  <Button type="submit" className="w-full hero-gradient text-muted hover:opacity-90 mt-8">
                        {buttonText || 'Submit'}
                  </Button>
            </form>
      );
};

export default CommonForm;