import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import Ico from 'react-native-vector-icons/Feather'

class Fetching1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            list: []
        }
    }

    componentDidMount() {


        fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant", {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitude: 13.0358481,
                longitude: 80.244455
            })

        })
            .then((res) => res.json())
            .then((res) =>
                this.setState({
                    isLoading: false,
                    list: res.listRestaurants
                }))

    }


    render() {
        const { list, isLoading } = this.state

        return (
            <View >
                <View>
                    <View style={{ flexDirection: 'row', margin: 22 }}>
                        <View >
                            <Text style={{ flex: 1 }}>231RESTAURANT      </Text>
                        </View>

                        <View>
                            <Text style={{ flex: 1 }}>  RELEVANCE <Icon name="down" color='orange'></Icon></Text></View>

                        <Text style={{ flex: 1, fontweight: 'bold' }}>      FILTER  <Ico name="sliders" color='orange'></Ico></Text>
                    </View>

                </View>
                <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <ScrollView>



                            <Card style={styles.Card}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Card style={styles.imgCard}>
                                        <Image source={{ uri: item.restaurantImage }} style={styles.img} ></Image>
                                    </Card>

                                    <Card style={styles.card1}>

                                        <Card.Title title={item.restaurantName} subtitle="North Indian,South Indian,Chinee..."></Card.Title>

                                        <Card.Content>
                                            <View style={styles.contentView}>
                                                <Text style={styles.contentText}>Time</Text>
                                                <Text style={styles.contentText}>Price</Text>
                                                <Text style={styles.contentText}>   Rating</Text>
                                            </View>


                                            <View style={styles.container}>

                                                <Text style={styles.containerTime}>{item.time} mms</Text>
                                                <Text style={styles.containerCost}>{item.displayCostForTwo}</Text>

                                                <View style={styles.avg}>
                                                    <Text style={styles.avgReview}>   <Icon size={15} name="star" color='white'></Icon>  {item.averageReview}</Text>
                                                </View>

                                            </View>
                                        </Card.Content>

                                    </Card>
                                </View>

                            </Card>




                        </ScrollView>
                    )}

                ></FlatList>


            </View>




        );
    }
}

export default Fetching1;


const styles = StyleSheet.create({
    Card: {
        margin: 10,
        height: 150
    },

    imgCard: {
        flex: 1,
        height: 150,
        padding: 5
    },

    img: {
        height: "100%",
        width: "100%",
        alignSelf: 'center',
        borderRadius: 8
    },

    card1: {
        flex: 2,
        height: 150
    },

    contentView: {
        flexDirection: 'row'
    },

    contentText: {
        flex: 2
    },

    container: {
        flexDirection: 'row',
        padding: 4
    },

    containerTime: {
        flex: 1,
        fontWeight: 'bold',
        marginLeft: -4
    },

    containerCost: {
        flex: 1,
        fontWeight: 'bold'
    },

    avg: {
        backgroundColor: '#5AE595',
        flex: 1,
        height: 20,
        width: 0,
        borderRadius: 3,
        fontWeight: 'bold'
    },

    avgReview:{
        color: 'white', 
        fontWeight: 'bold', 
        alignContent: 'center' 
    }


});