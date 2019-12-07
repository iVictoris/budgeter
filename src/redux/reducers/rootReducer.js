const initialState = {
  transactions: [{
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
  },]
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
    return state;
  }
}

export default rootReducer;