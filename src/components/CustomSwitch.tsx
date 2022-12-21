import React, {useState} from 'react';
import {Switch} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

interface CustomSwitchProps {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: CustomSwitchProps) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{false: '#D9D9DB', true: colors.primary}}
            thumbColor={isEnabled ? colors.primary : colors.primary}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};

export default CustomSwitch;
