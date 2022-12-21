import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import Header from '../components/Header';
import useAnimation from '../hooks/useAnimation';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Animation101Screen = () => {
    const {fadeIn, fadeOut, position, opacity, startMove} = useAnimation();
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    return (
        <>
            <Header text="Animation101" />
            <View style={style.container}>
                <Animated.View
                    style={{
                        ...style.purpleBox,
                        opacity,
                        backgroundColor: colors.primary,
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
        </>
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
