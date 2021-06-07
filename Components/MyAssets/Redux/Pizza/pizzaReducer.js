import {PIZZA_INCREASE,PIZZA_DECREASE} from './pizzaActiontype'


const initialState ={
    numberOfPizza:0
}

const pizzaReducer=(state=initialState,action)=>{
    switch (action.type) {
        case PIZZA_INCREASE:
            return{
                ...state,
                numberOfPizza: state.numberOfPizza+action.payload
            }  
            
        case PIZZA_DECREASE:
            return{
                ...state,
                numberOfPizza:state.numberOfPizza-1
            }
        default: return state;
    }

}

export default pizzaReducer;


