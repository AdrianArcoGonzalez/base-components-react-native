import React from 'react';
import {View, StyleSheet} from 'react-native';

const Animation102Screen = () => {
    return (
        <View style={style.container}>
            <View style={style.greenBox} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenBox: {
        backgroundColor: '#4fbc18',
        width: 150,
        height: 150,
    },
});

export default Animation102Screen;
