import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  LOOKUP_TRANSACTION
} from "../actions/actions";
import {} from "../actions/actionCreators";

const initialState = {
  transactions: {
    1: {
      id: 1,
      description: "Chipotle",
      debit: 0,
      credit: 5.4,
      category: "Food",
      voided: false
    },
    2: {
      id: 2,
      description: "Chipotle",
      debit: 0,
      credit: 8.5,
      category: "Food",
      voided: false
    },
    3: {
      id: 3,
      description: "Chipotle",
      debit: 0,
      credit: 12.24,
      category: "Food",
      voided: false
    },
    4: {
      id: 4,
      description: "Chipotle",
      debit: 0,
      credit: 50,
      category: "Food",
      voided: false
    },
    transactions: {
      5: {
        id: 5,
        description: "Work - Direct Deposit",
        debit: 100,
        credit: 0,
        category: "Labor",
        voided: false
      },
      6: {
        id: 6,
        description: "Work - Direct Deposit",
        debit: 200,
        credit: 0,
        category: "Labor",
        voided: false
      },
      7: {
        id: 7,
        description: "Work - Direct Deposit",
        debit: 250,
        credit: 0,
        category: "Labor",
        voided: false
      },
      8: {
        id: 8,
        description: "Work - Direct Deposit",
        debit: 400,
        credit: 0,
        category: "Labor",
        voided: false
      }
    }
  },
  activeTransaction: null
};

const transactions = (state = {}, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, [action.payload.id]: { ...action.payload } };
    case UPDATE_TRANSACTION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TRANSACTION:
      return {
        ...state,
        [action.payload.id]: { ...state[action.id], voided: true }
      };
    default:
      return state;
  }
};

const activeTransaction = (state = {}, action) => {
  switch (action.type) {
    case LOOKUP_TRANSACTION:
      const transaction = state.transactions[action.payload];
      return transaction;
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  return {
    transactions: transactions(state.transactions, action),
    activeTransaction: activeTransaction(state, action)
  };
};

export default rootReducer;
