// import {createStore} from 'redux';
  
// import burgerReducer from './Burger/burgerReducer';
  
// // Passing burgerReducer to createStore
// const store=createStore(burgerReducer);
  
// export default store;



import {createStore,combineReducers} from 'redux';
  
import burgerReducer from './Burger/burgerReducer';
import pizzaReducer from './Pizza/pizzaReducer'
  
// Combining burgerReducer and pizzaReducer in rootReducer
const rootReducer=combineReducers({
    burgerReducer:burgerReducer,
    pizzaReducer:pizzaReducer
})
  
// Passing rootReducer to createStore
const store=createStore(rootReducer);
  
export default store;