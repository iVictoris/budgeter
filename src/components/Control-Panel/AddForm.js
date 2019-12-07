import React from 'react'
import { Form, Field, withFormik } from "formik";


const AddForm = () => {
  return (
    <Form>
      <label htmlFor="add-description">Description: </label>
      <Field id="add-description" name="description" type="text" />

      <label htmlFor="add-debit">Debit: </label>
      <Field id="add-debit" name="debit" type="text" />

      <label htmlFor="add-credit">Credit</label>
      <Field id="add-credit" name="credit" type="text" />

      <label htmlFor="add-category">Category: </label>
      <Field id="add-category" name="category" type="text" />

      <button type="submit">Add Transaction</button>
    </Form>
  );
};

const EnhancedAddForm = withFormik({
  mapPropsToValues({ description, debit, credit, category }) {
    return { description, debit, credit, category };
  },
  handleSubmit(values, formikBag) {
    // do something
    console.log("Submit!");
    return;
  }
})(AddForm);

export default EnhancedAddForm
