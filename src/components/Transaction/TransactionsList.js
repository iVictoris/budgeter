import React from 'react'

import Transaction from "./Transaction";

const txs = [
  {
    transactionID: 1,
    description: 'Chipotle',
    credit: 5.40,
    category: 'Food'
  },
  {
    transactionID: 2,
    description: 'Chipotle',
    credit: 8.5,
    category: 'Food'
  },
  {
    transactionID: 3,
    description: 'Chipotle',
    credit: 12.24,
    category: 'Food'
  },
  {
    transactionID: 4,
    description: 'Chipotle',
    credit: 50,
    category: 'Food'
  },
]

const TransactionsList = () => {

  const transactions = txs.map(item => <Transaction {...item} key={item.transactionID} />)

  return (
    <section className="Transactions-list">
    {!!transactions.length && transactions}
  </section>
  )
}

export default TransactionsList
