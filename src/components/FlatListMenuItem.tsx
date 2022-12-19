import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
interface RenderMenuItemProps {
    menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: RenderMenuItemProps): JSX.Element => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} color={'grey'} size={23} />
                <Text>{menuItem.name}</Text>
                <View style={{flex: 1}} />
                <Icon
                    name={'chevron-forward-outline'}
                    color={'grey'}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
    container: {flexDirection: 'row'},
});
