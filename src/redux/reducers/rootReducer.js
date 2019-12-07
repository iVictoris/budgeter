import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION
} from "../actions/actions";
import {} from "../actions/actionCreators";

const initialState = {
  transactions: {
    1: {
      transactionID: 1,
      description: "Chipotle",
      credit: 5.4,
      category: "Food",
      voided: false
    },
    2: {
      transactionID: 2,
      description: "Chipotle",
      credit: 8.5,
      category: "Food",
      voided: false
    },
    3: {
      transactionID: 3,
      description: "Chipotle",
      credit: 12.24,
      category: "Food",
      voided: false
    },
    4: {
      transactionID: 4,
      description: "Chipotle",
      credit: 50,
      category: "Food",
      voided: false
    }
  }
};

const transactions = (state = {}, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, [action.transaction.id]: action.transaction };
    case UPDATE_TRANSACTION:
        return {...state, [action.transaction.id] : action.transaction};
    case DELETE_TRANSACTION:
      return {...state, [action.transaction.id]: {...state[action.id], voided: true}}
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  return {
    transactions: transactions(state.transactions, action)
  };
};

export default rootReducer;
