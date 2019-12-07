import React from 'react'
import { Form, Field, withFormik } from "formik";

const UpdateForm = ({ id }) => {
  // query for transaction somewhere...

  const transaction = {
    transactionID: 3,
    description: "Chipotle",
    credit: 12.24,
    category: "Food",
    debit: 0
  };

  const {transactionID, description, credit, category, debit} = transaction

  return (
    <Form>
      <label htmlFor="update-id">ID</label>
      <Field id="update-id" name="id" type="text" value={transactionID} disabled />

      <label htmlFor="update-description">Description: </label>
      <Field id="update-description" name="description" type="text" value={description}/>

      <label htmlFor="update-debit">Debit: </label>
      <Field id="update-debit" name="debit" type="text" value={debit}/>

      <label htmlFor="update-credit">Credit</label>
      <Field id="update-credit" name="credit" type="text" value={credit}/>

      <label htmlFor="update-category">Category: </label>
      <Field id="update-category" name="category" type="text" value={category}/>

      <button type="submit">Update Transaction</button>
    </Form>
  );
};

const EnhancedUpdateForm = withFormik({
  mapPropsToValues({ id, description, debit, credit, category }) {
    return { id, description, debit, credit, category };
  },

  handleSubmit(values, formikBag) {
    return;
  }
})(UpdateForm);

export default EnhancedUpdateForm
