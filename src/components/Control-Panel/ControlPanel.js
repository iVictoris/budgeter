import React from 'react'

import {UpdateForm, AddForm, LookupForm} from './';

const ControlPanel = () => {
  return (
    <section className="Control-Panel">
        <header className="Control-Panel-header">
          <h2>Admin Panel</h2>
        </header>

        <section className="Control-Panel-actions">
          <section className="Control-Panel-add">
            <section className="Control-Panel-form-container">
              <header>
                <h3>Adding a Transaction</h3>
              </header>
              <AddForm />
            </section>
          </section>
          <section className="Control-Panel-lookup">
            <section className="Control-Panel-form-container">
              <header>
                <h3>Lookup a Transaction</h3>
              </header>
              <LookupForm />
            </section>
          </section>
          <section className="Control-Panel-update">
            <section className="Control-Panel-form-container">
              <header>
                <h3>Update Transaction</h3>
              </header>
              <UpdateForm />
            </section>
          </section>
          <section className="Control-Panel-delete"></section>
        </section>
      </section>
  )
}

export default ControlPanel
