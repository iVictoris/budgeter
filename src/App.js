import React from "react";
import TransactionTable from "./components/Transaction/TransactionTable";
import { Form, Field, withFormik } from "formik";

function App() {
  return (
    <div className="App">
      <TransactionTable />

      
    </div>
  );
}

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

export default App;
