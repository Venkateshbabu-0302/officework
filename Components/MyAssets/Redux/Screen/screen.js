import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {increaseBurgerAction,decreaseBurgerAction,increasePizzaAction,decreasePizzaAction} from '../index'



class Screen extends Component {
    render() { 
        return (
            <View>
                <View>
                <Text>Number Of Burger:{this.props.numberOfBurger}</Text>
                <Button
                title="Increase"
                onPress={()=>this.props.increaseBurger(1)}
                />

                <Button
                title="Decrease"
                onPress={()=>this.props.decreaseBurger()}
                />

            </View>

            <View>



                <Text>Number Of Pizza={this.props.numberOfPizza}</Text>

                <Button
                title="Increase"
                onPress={()=>this.props.increasePizza(1)}
                />

                <Button
                title="Decrease"
                onPress={()=>this.props.decreasePizza()}
                />

            </View>

            </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        // numberOfBurger:state.numberOfBurger,

        numberOfBurger:state.burgerReducer.numberOfBurger,
        numberOfPizza:state.pizzaReducer.numberOfPizza
        
    }

}
 

const mapDispatchToProps = (dispatch)=>{
    return{
        increaseBurger:(parameter)=>{dispatch(increaseBurgerAction(parameter))},
        decreaseBurger:()=>{dispatch(decreaseBurgerAction())},

        increasePizza:(parameter)=>{dispatch(increasePizzaAction(parameter))},
        decreasePizza:()=>{dispatch(decreasePizzaAction())}


    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Screen) ;