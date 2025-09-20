import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Loader } from 'lucide-react';

const types = {
      Input: 'input',
      Textarea: 'textarea'
};

const CommonForm = ({
      formControls,
      onSubmit,
      buttonText,
      values,
      onChange,
      errors,
      isLoading
}) => {

      const renderInputsByComponentsType = (getControlItems) => {
            const { name, placeholder, type, componentType, rows, label } = getControlItems;

            const handleChange = (event) => {
                  onChange(event.target.name, event.target.value);
            };

            const handleFileChange = (event) => {
                  const file = event.currentTarget.files[0];
                  onChange(name, file);
            };

            return (
                  <div className="grid w-full gap-1.5">
                        <Label htmlFor={name}>{label}</Label>
                        {componentType === types.Textarea ? (
                              <Textarea
                                    name={name}
                                    id={name}
                                    placeholder={placeholder}
                                    rows={rows}
                                    className={'resize-none'}
                                    value={values[name]}
                                    onChange={handleChange}
                                    disabled={isLoading}
                              />
                        ) : (
                              <Input
                                    name={name}
                                    id={name}
                                    placeholder={placeholder}
                                    type={type}
                                    onChange={type === 'file' ? handleFileChange : handleChange}
                                    value={type !== 'file' ? values[name] : undefined}
                                    className={`${type === 'number' ? 'hide-number-arrows' : ''}`}
                                    disabled={isLoading}
                              />
                        )}
                        {errors && errors[name] ? (
                              <div className="text-red-500 text-sm">{errors[name]}</div>
                        ) : null}
                  </div>
            );
      };

      return (
            <form onSubmit={onSubmit} className='space-y-4'>
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
                  <Button type="submit" className="w-full hero-gradient text-muted hover:opacity-90 mt-8" disabled={isLoading}>
                        {isLoading ? <Loader className="animate-spin mx-auto" /> : (buttonText || 'Submit')}
                  </Button>
            </form>
      );
};

export default CommonForm;