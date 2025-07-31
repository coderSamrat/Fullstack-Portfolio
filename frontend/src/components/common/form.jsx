import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const types = {
      Input: 'input',
      Textarea: 'textarea'
};

const CommonForm = ({
      formControls,
      formData,
      setFormData,
      onSubmit,
      buttonText
}) => {

      const renderInputsByComponentsType = (getControlItems) => {
            const value = formData[getControlItems.name] ?? '';
            const commonProps = {
                  name: getControlItems.name,
                  placeholder: getControlItems.placeholder,
                  id: getControlItems.name,
                  value: value,
                  onChange: (e) =>
                        setFormData({
                              ...formData,
                              [getControlItems.name]: e.target.value,
                        }),
            };
            switch (getControlItems.componentType) {
                  case types.Input:
                        return (
                              <Input
                                    {...commonProps}
                                    type={getControlItems.type}
                                    min={getControlItems.type === 'number' ? 0 : undefined}
                                    max={getControlItems.type === 'number' ? 9999999999 : undefined}
                                    className={`${getControlItems.type === 'number' ? 'hide-number-arrows' : ''}`}
                              />
                        );
                  case types.Textarea:
                        return (
                              <Textarea
                                    {...commonProps}
                                    rows={getControlItems.rows || 3}
                              />
                        );
                  default:
                        return (
                              <Input
                                    {...commonProps}
                                    type={getControlItems.type || 'text'}
                              />
                        );
            }
      };

      return (
            <form onSubmit={onSubmit} className='space-y-4'>
                  <div className='flex flex-col gap-3'>
                        {
                              formControls.map((controlItems) => (
                                    <div
                                          key={controlItems.name}
                                          className='grid w-full gap-1.5'
                                    >
                                          {
                                                renderInputsByComponentsType(controlItems)
                                          }
                                    </div>
                              ))
                        }
                  </div>
                  <Button type="submit" className="w-full hero-gradient text-muted hover:opacity-90">
                        {buttonText || 'Submit'}
                  </Button>
            </form>
      );
};

export default CommonForm;
