import React from "react";
import TransactionTable from "./components/Transaction/TransactionTable";
import {Form, Field, withFormik} from 'formik'

function App() {
  return (
    <div className="App">
      <TransactionTable />

      <section className="Control-Panel">
        <header className="Control-Panel-header">
          <h2>Admin Panel</h2>
        </header>

        <section className="Control-Panel-actions">
          <section className="Control-Panel-add-transaction">
            <section className="Control-Panel-add-form-container">
              <EnhancedAddForm />
            </section>
          </section>
          <section className="Control-Panel-update-transaction"></section>
          <section className="Control-Panel-delete-transaction"></section>
        </section>
      </section>
    </div>
  );
}

const AddForm = () => {
  return (
    <Form>
      <label htmlFor="add-description">Description: </label>
      <Field id='add-description'name='description' type='text' />

      <label htmlFor="add-debit">Debit: </label>
      <Field id='add-debit' name='debit' type='text' />
      
      <label htmlFor="add-credit">Credit</label>
      <Field id='add-credit' name='credit' type='text' />

      <label htmlFor="add-category">Category: </label>
      <Field id='add-category' name='category' type='text' />
    </Form>
  )
}

const EnhancedAddForm = withFormik({
  mapPropsToValues({description, debit, credit, category}) {
    return {description, debit, credit, category}
  },
  handleSubmit(values, formikBag) {
    // do something
    console.log('Submit!')
    return;
  }
})(AddForm);

export default App;
