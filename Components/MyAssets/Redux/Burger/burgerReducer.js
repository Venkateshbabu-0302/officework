import {INCREASE_BURGER,DECREASE_BURGER} from './burgerActiontype'


const initialState={
    numberOfBurger:0
}


const burgerReducer=(state=initialState,action)=>{

    switch (action.type) {
        case INCREASE_BURGER:
            return{
                ...state,
                numberOfBurger:state.numberOfBurger+action.payload
            }


         case DECREASE_BURGER:
            return{
                ...state,
                numberOfBurger:state.numberOfBurger-1
             }
            
          
    
        default:return state;
    }
}

export default burgerReducer;