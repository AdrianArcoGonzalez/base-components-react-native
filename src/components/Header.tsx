import React from 'react';
import {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '../theme/appTheme';
import {ThemeContext} from '../context/ThemeContext';

interface HeaderProps {
    text: string;
}

const Header = ({text}: HeaderProps): JSX.Element => {
    const {top} = useSafeAreaInsets();
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    return (
        <View
            style={{
                marginTop: top + 20,
                marginBottom: 20,
                marginLeft: 20,
            }}>
            <Text style={{...styles.title, color: colors.text}}>{text}</Text>
        </View>
    );
};

export default Header;
