import {PIZZA_INCREASE,PIZZA_DECREASE} from './pizzaActiontype'

export const increasePizzaAction=(parameter)=>{
    return{
        type: PIZZA_INCREASE,
        payload: parameter
    }
}

export const decreasePizzaAction=()=>{
    return{
        type: PIZZA_DECREASE
        
    }
}

