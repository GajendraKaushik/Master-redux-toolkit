import classes from './Counter.module.css';
import {Component} from 'react'

import {useSelector, useDispatch, connect} from 'react-redux';

const Counter = () => {
  

  // retriving data from the redux store
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch(); 

  const increamentHandler = () =>{
    dispatch({type: 'increment'})
  }
  
  const increaseHandler = () =>{
    dispatch({type: 'increase', amount: 5})
  }
  const decrementHandler = () =>{
    dispatch({type : 'decrement'})
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


// Redux in class based components

// class Counter extends Component{
//   increamentHandler(){
//   this.props.increment()
//   }
//   decrementHandler(){
//     this.props.decrement()
//   }
//   toggleCounterHandler(){}

//   render(){
//     return(
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increamentHandler.bind(this)}>increment</button>
//           <button onClick={this.increamentHandler.bind(this)}>increment by 10</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>

//     );
//   }
// }
// const mapStateToProps = (state)=>{
//    return{counter: state.counter 
// };
// }

// const mapStateToDispatch =(dispatch)=>{
//          return{
//           increment : () => dispatch({type:'increment'}), 
//           decrement : () => dispatch({type:'decrement'}) 
//         }
// }

// export default connect(mapStateToProps, mapStateToDispatch)(Counter);

export default Counter;
