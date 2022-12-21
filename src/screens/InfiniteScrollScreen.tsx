import React, {useState, useContext} from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Image,
    ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import {ThemeContext} from '../context/ThemeContext';

const InfiniteScrollScreen = () => {
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    };

    const renderItem = (item: number) => {
        return (
            <Image
                style={styles.image}
                source={{uri: `https://picsum.photos/id/${item}/500/400`}}
            />
        );
    };

    return (
        <View style={{flex: 1}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header text="Infinite Scroll" />}
                data={numbers}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item, index) => item + index.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => {
                    return (
                        <View
                            style={{
                                height: 100,
                                width: '100%',
                                justifyContent: 'center',
                                backgroundColor: colors.background,
                            }}>
                            <ActivityIndicator
                                size={40}
                                color={colors.primary}
                            />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
    },
});

export default InfiniteScrollScreen;
