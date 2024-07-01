import React from 'react';
import { useFormik } from 'formik';
import { formValidationSchema } from '../../schema/formValidation';

const RestaurantForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      name: '',
      description: '',
      location: '',
    },
    enableReinitialize: true,
    validationSchema: formValidationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500 text-sm">{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        {formik.touched.location && formik.errors.location ? (
          <div className="text-red-500 text-sm">{formik.errors.location}</div>
        ) : null}
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;