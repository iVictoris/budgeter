import React from 'react'

const CashFlowStatement = () => {
  return (
    <section className="CashFlowStatement">
        <section className="IncomeList">
          <section className="Income"></section>
          <section className="Income"></section>
          <section className="Income"></section>
          <section className="Total"></section>
        </section>
        <section className="ExpenseList">
          <section className="Expense"></section>
          <section className="Expense"></section>
          <section className="Expense"></section>
          <section className="Total"></section>
        </section>
        <section className="AssetList">
          <section className="Asset"></section>
          <section className="Asset"></section>
          <section className="Asset"></section>
          <section className="Total"></section>
        </section>
        <section className="LiabilityList">
          <section className="Liability"></section>
          <section className="Liability"></section>
          <section className="Liability"></section>
          <section className="Total"></section>
        </section>
      </section>
  )
}

export default CashFlowStatement
