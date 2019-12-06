import React from 'react'
import TransactionsList from "./TransactionsList";


const TransactionTable = () => {
  return (
    <section className="Transactions">
        <header className="Transactions-heading">
          <section className="Transactions-header">ID</section>
          <section className="Transactions-header">Description</section>
          <section className="Transactions-header">Debits</section>
          <section className="Transactions-header">Credits</section>
          <section className="Transactions-header">Category</section>
        </header>
        <TransactionsList />
      </section>
  )
}

export default TransactionTable
