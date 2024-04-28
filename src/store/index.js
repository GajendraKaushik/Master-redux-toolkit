import {createStore} from 'redux' 
import {createSlice, configureStore} from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import { authSlice } from './auth';

// const redux = require('redux');




// const counterReducer = (state=latestSatet,action) =>{
//   if(action.type ==='increment'){
//     return {
//         ...state, counter: state.counter + 1,
//         //
//     }
//   }
//   if(action.type === 'increase'){
//     return{counter:state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }
//   if(action.type ==='decrement'){
//     return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'toggle'){
//     return{
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }
//   return state
// }

// const store = createStore(counterReducer);

//counterSlice.actions.toggleCounter;

 const store = configureStore({
  reducer: {counter:counterSlice.reducer, auth:authSlice.reducer}
});


export default store ;