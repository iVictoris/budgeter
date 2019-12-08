import React from "react";
import { connect } from "react-redux";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import { updateTransaction } from "../../redux/actions/actionCreators";
const UpdateForm = ({ errors, touched }) => {
  // query for transaction somewhere...

  return (
    <Form>
      <label htmlFor="id">ID</label>
      <Field id="id" name="id" type="text" disabled={true} />

      <label htmlFor="description">Description: </label>
      <Field name="description" type="text" />
      {touched.description && errors.description && (
        <p className="error">{errors.description}</p>
      )}

      <label htmlFor="debit">Debit: </label>
      <Field name="debit" type="text" />

      <label htmlFor="credit">Credit</label>
      <Field name="credit" type="text" />

      <label htmlFor="category">Category: </label>
      <Field name="category" type="text" />
      {touched.category && errors.category && (
        <p className="error">{errors.category}</p>
      )}
      <button type="submit">Update Transaction</button>
    </Form>
  );
};

const EnhancedUpdateForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues(props) {
    const {
      activeTransaction: { id, description, debit, credit, category }
    } = props;
    return {
      id: id || "",
      description: description || "",
      debit: debit || "",
      credit: credit || "",
      category: category || ""
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required(
      "To update this transaction you need to provide a description"
    ),
    category: Yup.string().required(
      "To update this transaction you need to provide a category"
    )
  }),

  handleSubmit(values, { props: { updateTransaction }, setValues }) {
    const transaction = { ...values };
    updateTransaction(transaction);
    return;
  }
})(UpdateForm);

const mapStateToProps = ({ activeTransaction }) => ({
  activeTransaction
});

export default connect(mapStateToProps, { updateTransaction })(
  EnhancedUpdateForm
);
