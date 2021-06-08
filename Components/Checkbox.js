import React, { useState } from 'react';
import { Text, View, CheckBox, StyleSheet } from 'react-native';

export const Checkbox = () => {
    const [selected, setSelected] = useState(false);
    return (

        <View style={styles.checkboxContainer}>
            <CheckBox
                value={selected}
                onValueChange={setSelected}
                style={styles.checkbox}
            />
            <Text>Hello</Text>
        </View>

    );
};

const styles = StyleSheet.create({

    checkboxContainer: {
        flex: 1,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});