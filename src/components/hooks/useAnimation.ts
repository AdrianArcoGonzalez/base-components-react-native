import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(position, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(position, {
            toValue: -100,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start();
    };

    const startMove = (initialPosition: number, duration: number = 400) => {
        position.setValue(initialPosition);

        Animated.timing(position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start();
    };

    return {fadeIn, fadeOut, position, opacity, startMove};
};

export default useAnimation;
