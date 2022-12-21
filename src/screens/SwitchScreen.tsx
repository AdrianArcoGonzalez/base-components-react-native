import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import Header from '../components/Header';
import {ThemeContext} from '../context/ThemeContext';

const SwitchScreen = (): JSX.Element => {
    const {
        theme: {colors},
    } = useContext(ThemeContext);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View>
            <Header text="Switches" />
            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                    Active {state.isActive}
                </Text>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={value => onChange(value, 'isActive')}
                />
            </View>

            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                    Hungry {state.isHungry}
                </Text>
                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={value => onChange(value, 'isHungry')}
                />
            </View>
            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                    Happy {state.isHappy}
                </Text>
                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={value => onChange(value, 'isHappy')}
                />
            </View>

            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                    Active? {JSON.stringify(state.isActive)}
                </Text>
            </View>

            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                    Hungry? {JSON.stringify(state.isHungry)}
                </Text>
            </View>

            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                    Happy? {JSON.stringify(state.isHappy)}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default SwitchScreen;
