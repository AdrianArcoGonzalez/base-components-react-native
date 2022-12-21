/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import styles from '../theme/appTheme';
import {ThemeContext} from '../context/ThemeContext';

const ChangeThemeScreen = () => {
    const {
        setDarkTheme,
        setLightTheme,
        theme: {colors},
    } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <Header text="Theme" />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        marginHorizontal: 20,
                        backgroundColor: colors.primary,
                        height: 30,
                        width: 150,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{color: colors.text, fontSize: 18}}>Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.8}
                    style={{
                        marginHorizontal: 20,
                        backgroundColor: colors.primary,
                        height: 30,
                        width: 150,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{color: colors.text, fontSize: 18}}>
                        Light
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChangeThemeScreen;
