import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
      const formik = useFormik({
            initialValues: {
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
            },
            validationSchema: Yup.object({
                  name: Yup.string().required('Required'),
                  email: Yup.string().email('Invalid email address').required('Required'),
                  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
                  confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Required'),
            }),
            onSubmit: values => {
                  // Handle signup logic here
                  console.log(values);
            },
      });

      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                        <form onSubmit={formik.handleSubmit}>
                              <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                                    <input
                                          id="name"
                                          type="text"
                                          {...formik.getFieldProps('name')}
                                          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                                    ) : null}
                              </div>
                              <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                                    <input
                                          id="email"
                                          type="email"
                                          {...formik.getFieldProps('email')}
                                          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    ) : null}
                              </div>
                              <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                                    <input
                                          id="password"
                                          type="password"
                                          {...formik.getFieldProps('password')}
                                          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                          <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                                    ) : null}
                              </div>
                              <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                          id="confirmPassword"
                                          type="password"
                                          {...formik.getFieldProps('confirmPassword')}
                                          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                          <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                                    ) : null}
                              </div>
                              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
                        </form>
                        <p className="text-center mt-4">
                              Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                        </p>
                  </div>
            </div>
      );
};

export default Signup;
