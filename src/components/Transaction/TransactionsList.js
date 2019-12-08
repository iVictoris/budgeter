import React from 'react'
import {connect} from 'react-redux'

import Transaction from "./Transaction";

const TransactionsList = ({transactions}) => {

  const transactionsList = Object.entries(transactions).map(([id, transaction]) => <Transaction {...transaction} key={id} />)

  return (
    <section className="Transactions-list">
    {!!transactionsList.length && transactionsList}
  </section>
  )
}

const mapStateToProps = ({transactions}) => ({
  transactions
})


export default connect(mapStateToProps, null)(TransactionsList);
