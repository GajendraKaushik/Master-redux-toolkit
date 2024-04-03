import {createStore} from 'redux'

// const redux = require('redux');
const latestSatet ={counter: 0, showCounter: true}

const counterReducer = (state=latestSatet,action) =>{
  if(action.type ==='increment'){
    return {
        ...state, counter: state.counter + 1,
        //
    }
  }
  if(action.type === 'increase'){
    return{counter:state.counter + action.amount,
      showCounter: state.showCounter
    }
  }
  if(action.type ==='decrement'){
    return {
        counter: state.counter - 1,
        showCounter: state.showCounter
    }
  }

  if(action.type === 'toggle'){
    return{
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }
  return state
}

const store = createStore(counterReducer);

export default store ;