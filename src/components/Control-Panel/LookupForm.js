import React from 'react'
import { Form, Field, withFormik } from "formik";

const LookupForm = () => {
  return (
    <Form>
      <label htmlFor="update-id">Lookup ID</label>
      <Field id="update-id" name="id" type="text" />
      <button type="submit">Find Transaction</button>
    </Form>
  );
};

const EnhancedLookupForm = withFormik({
  mapPropsToValues({ id }) {
    return {
      id
    };
  },

  handleSubmit(values, formikBag) {
    return;
  }
})(LookupForm);

export default EnhancedLookupForm
