import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import useAnimation from '../components/hooks/useAnimation';

const Animation101Screen = () => {
    const {fadeIn, fadeOut, position, opacity, startMove} = useAnimation();

    return (
        <View style={style.container}>
            <Animated.View
                style={{
                    ...style.purpleBox,
                    opacity,
                    transform: [
                        {
                            translateY: position,
                        },
                    ],
                }}
            />
            <Button
                title="Fade in"
                onPress={() => {
                    fadeIn();
                    startMove(-200);
                }}
            />
            <Button title="Fade out" onPress={fadeOut} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    purpleBox: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
        marginBottom: 20,
    },
});

export default Animation101Screen;
