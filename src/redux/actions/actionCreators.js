import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  LOOKUP_TRANSACTION
} from "./actions";

export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction
  }
}

export const lookupTransaction = (id) => {
  return {
    type: LOOKUP_TRANSACTION,
    payload: id
  }
}

export const updateTransaction = (transaction) => {
  return {
    type: UPDATE_TRANSACTION,
    payload: transaction
  }
}

export const deleteTransaction = (id) => {
  return {
    type: DELETE_TRANSACTION,
    payload: id
  }
}