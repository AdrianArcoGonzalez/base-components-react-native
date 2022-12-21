import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/ThemeContext';

interface RenderMenuItemProps {
    menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: RenderMenuItemProps): JSX.Element => {
    const navigation = useNavigation();
    const {
        theme: {colors},
    } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} color={colors.primary} size={23} />
                <Text style={{...styles.textMargin, color: colors.text}}>
                    {menuItem.name}
                </Text>
                <View style={{flex: 1}} />
                <Icon
                    name={'chevron-forward-outline'}
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
    container: {flexDirection: 'row'},
    textMargin: {
        marginLeft: 5,
    },
});
