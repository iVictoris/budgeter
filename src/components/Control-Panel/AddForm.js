import React from 'react'
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {addTransaction} from '../../redux/actions/actionCreators';

const AddForm = ({errors, touched}) => {
  return (
    <Form>
      <label htmlFor="add-description">Description: </label>
      <Field id="add-description" name="description" type="text" />
      {touched.description && errors.description && <p className='error'>{errors.description}</p>}
      <label htmlFor="add-debit">Debit: </label>
      <Field id="add-debit" name="debit" type="text" />

      <label htmlFor="add-credit">Credit</label>
      <Field id="add-credit" name="credit" type="text" />

      <label htmlFor="add-category">Category: </label>
      <Field id="add-category" name="category" type="text" />
      {touched.category && errors.category && <p className='error'>{errors.category}</p>}

      <button type="submit">Add Transaction</button>
    </Form>
  );
};

const EnhancedAddForm = withFormik({
  mapPropsToValues({ description = '', debit = '', credit = '', category = '' }) {
    return { description, debit, credit, category };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required('Please enter a description of the transaction.'),
    debit: Yup.string(),
    credit: Yup.string(),
    category: Yup.string().required('Please enter a category for your transaction.')
  }),
  
  handleSubmit(values, {props: {addTransaction}, resetForm}) {
    // do something
    const id = Math.random().toString(36).substr(2, 9)
    const transaction = {
      ...values,
      id,
      transactionID: id
    }

    addTransaction(transaction);
    resetForm({description: '', debit: '', credit: '', category: ''})
    return;
  }
})(AddForm);



export default connect(null, {addTransaction})(EnhancedAddForm)
