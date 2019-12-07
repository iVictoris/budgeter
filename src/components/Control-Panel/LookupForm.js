import React from "react";
import { connect } from "react-redux";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import { lookupTransaction } from "../../redux/actions/actionCreators";

const LookupForm = ({ errors, touched }) => {
  return (
    <Form>
      <label htmlFor="update-id">Lookup ID</label>
      <Field id="update-id" name="id" type="text" />
      {touched.id && errors.id && <p className="error">{errors.id}</p>}
      <button type="submit">Find Transaction</button>
    </Form>
  );
};

const EnhancedLookupForm = withFormik({
  mapPropsToValues({ id = "" }) {
    return {
      id
    };
  },
  validationSchema: Yup.object().shape({
    id: Yup.string().required("You must enter an ID to look up a transaction")
  }),

  handleSubmit({ id }, { props: { lookupTransaction } }) {
    lookupTransaction(id);
    return;
  }
})(LookupForm);

export default connect(null, { lookupTransaction })(EnhancedLookupForm);
