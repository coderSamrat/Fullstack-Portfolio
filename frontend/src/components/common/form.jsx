import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'; 
import { Label } from '../ui/label';
import { Loader } from 'lucide-react';

const types = {
      Input: 'input',
      Textarea: 'textarea',
      Select: 'select' 
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
            const { name, placeholder, type, componentType, rows, label, disabled, options } = getControlItems; // Added options

            const handleChange = (event) => {
                  if (type === 'checkbox') {
                        onChange(event.target.name, event.target.checked);
                  } else {
                        onChange(event.target.name, event.target.value);
                  }
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
                                    disabled={isLoading || disabled}
                              />
                        ) : componentType === types.Select ? (
                              <Select
                                    name={name}
                                    id={name}
                                    onValueChange={(value) => onChange(name, value)}
                                    value={values[name]}
                                    disabled={isLoading || disabled}
                              >
                                    <SelectTrigger>
                                          <SelectValue placeholder={placeholder} />
                                    </SelectTrigger>
                                    <SelectContent>
                                          {options && options.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                      {option.label}
                                                </SelectItem>
                                          ))}
                                    </SelectContent>
                              </Select>
                        ) : (
                              <Input
                                    name={name}
                                    id={name}
                                    placeholder={placeholder}
                                    type={type}
                                    onChange={type === 'file' ? handleFileChange : handleChange}
                                    value={type !== 'file' ? values[name] : undefined}
                                    checked={type === 'checkbox' ? values[name] : undefined}
                                    className={`${type === 'number' ? 'hide-number-arrows' : ''}`}
                                    disabled={isLoading || disabled}
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