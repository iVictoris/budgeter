import React from "react";

const formatMoney = amount => {
  const dollars = Number.parseFloat(amount).toFixed(2);
  return `$${dollars}`;
};

const Transaction = ({
  transactionID,
  description,
  debit,
  credit,
  category
}) => {
  return (
    <section className="Transaction">
      <section className="Transaction-key">{transactionID}</section>
      <section className="Transaction-description">{description}</section>
      <section className="Transaction-debit">
        {formatMoney(debit || "0")}
      </section>
      <section className="Transaction-credit">
        {formatMoney(credit || "0")}
      </section>
      <section className="Transaction-category">{category}</section>
    </section>
  );
};

export default Transaction;
