import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
      const formik = useFormik({
            initialValues: {
                  email: '',
                  password: '',
            },
            validationSchema: Yup.object({
                  email: Yup.string().email('Invalid email address').required('Required'),
                  password: Yup.string().required('Required'),
            }),
            onSubmit: values => {
                  // Handle login logic here
                  console.log(values);
            },
      });

      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                        <form onSubmit={formik.handleSubmit}>
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
                              <div className="mb-6">
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
                              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
                        </form>
                        <p className="text-center mt-4">
                              Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
                        </p>
                  </div>
            </div>
      );
};

export default Login;
