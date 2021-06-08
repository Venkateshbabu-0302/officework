import React, { Component } from 'react';
import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            check: {}

        }
    }

    componentDidMount() {
        this.getListFlims()

    }

    getListFlims = async () => {
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
            const newArray = res.data.results.map(e => {
                return {
                    ...e,
                    selected: false
                }
            })

            this.setState({
                data: newArray
            })

            // console.log("res:" , res)
        } catch (error) {
            console.log("error:", error)

        }
    }

    onValueChange = (item, index) => {
        const { data } = this.state;
        const newData = data.map(e => {
            if (e.id == item.id) {
                return {
                    ...e,
                    selected: !e.selected
                }
            }
            return {
                ...e,
                selected: e.selected
            }

        })

        this.setState({
            data: newData
        })

    }


    checkBox_Test = (id) => {
        const checkCopy = { ...this.state.check }
        if (checkCopy[id]) checkCopy[id] = false;
        else checkCopy[id] = true;
        this.setState({ check: checkCopy });
    }

    onClick = () => {
        const { data } = this.state;
        const listSelected = data.filter(e => e.selected == true);
        // console.log('listSelected:', listSelected);
        let contentAlert = '';
        listSelected.forEach(e => {
            contentAlert = contentAlert + e.original_title;
        })
        Alert.alert(contentAlert)
    }




    renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                    resizeMode="contain" />
                <View style={styles.wrapText}>
                    <Text>{item.original_title}</Text>


                    <CheckBox
                        style={styles.checkBox}
                        disabled={false}
                        onAnimationType='fill'
                        offAnimationType='fade'
                        boxType='square'
                        onValueChange={() => this.onValueChange(item, index)}
                        value={this.state.check[item.id]}
                        onChange={() => this.checkBox_Test(item.id)}

                    />
                </View>
            </View >


        )
    }




    render() {
        const { data } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}


                />

                <View style={styles.wrapButtun} >
                    <TouchableOpacity style={styles.button} onPress={this.onClick}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        padding: 8
    },
    item: {
        flexDirection: 'row',
        marginTop: 8,
        padding: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: 'white',
        elevation: 5,
    },
    image: {
        width: 100,
        height: 150
    },
    wrapText: {
        flex: 1,
        marginTop: 16,
        marginLeft: 8
    },
    checkBox: {
        width: 20,
        height: 20,
        marginTop: 4
    },
    wrapButtun: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 16,
        backgroundColor: 'orange'
    }
});

export default Box;


