import React from 'react';
import { Link } from 'react-router-dom';
import CommonForm from '../../components/common/form';

const Signup = () => {
      const formControls = [
            {
                  name: 'name',
                  label: 'Name',
                  placeholder: 'Enter your name',
                  type: 'text',
                  componentType: 'input',
                  validation: {
                        required: true,
                  },
            },
            {
                  name: 'email',
                  label: 'Email',
                  placeholder: 'Enter your email',
                  type: 'email',
                  componentType: 'input',
                  validation: {
                        required: true,
                        email: true,
                  },
            },
            {
                  name: 'password',
                  label: 'Password',
                  placeholder: 'Enter your password',
                  type: 'password',
                  componentType: 'input',
                  validation: {
                        required: true,
                  },
            },
            {
                  name: 'confirmPassword',
                  label: 'Confirm Password',
                  placeholder: 'Confirm your password',
                  type: 'password',
                  componentType: 'input',
                  validation: {
                        required: true,
                  },
            },
      ];

      const handleSubmit = (values) => {
            console.log(values);
      };

      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                        <CommonForm
                              formControls={formControls}
                              onSubmit={handleSubmit}
                              buttonText="Sign Up"
                        />
                        <p className="text-center mt-4">
                              Already have an account? <Link to="/auth/login" className="text-blue-600">Login</Link>
                        </p>
                  </div>
            </div>
      );
};

export default Signup;