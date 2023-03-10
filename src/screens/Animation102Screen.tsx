import React, {useRef, useContext} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';
import Header from '../components/Header';
import {ThemeContext} from '../context/ThemeContext';

const Animation102Screen = () => {
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,

        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: pan.x,
                    dy: pan.y,
                },
            ],
            {useNativeDriver: false},
        ),
        onPanResponderRelease: () => {
            Animated.spring(pan, {
                toValue: {x: 0, y: 0},
                useNativeDriver: false,
            }).start();
        },
    });
    return (
        <>
            <Header text="Animation102" />
            <View style={style.container}>
                <Animated.View
                    {...panResponder.panHandlers}
                    style={[
                        pan.getLayout(),
                        {...style.greenBox, backgroundColor: colors.primary},
                    ]}
                />
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
    greenBox: {
        width: 150,
        height: 150,
    },
});

export default Animation102Screen;
