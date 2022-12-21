/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageSourcePropType,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

const SlidesScreen = () => {
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const {navigate} = useNavigation();
    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                    backgroundColor: colors.background,
                }}>
                <Image
                    source={item.img}
                    style={{width: 350, height: 400, resizeMode: 'center'}}
                />
                <Text style={{...styles.title, color: colors.text}}>
                    {item.title}
                </Text>
                <Text style={{...styles.subTitle, color: colors.text}}>
                    {item.desc}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{flex: 1, paddingTop: 50}}>
            <Carousel
                data={items}
                renderItem={({item}) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout="default"
                onSnapToItem={index => {
                    setActiveIndex(index);
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: colors.primary,
                    }}
                />
                {activeIndex === 2 && (
                    <TouchableOpacity
                        onPress={() => navigate('Home' as never)}
                        activeOpacity={0.8}
                        style={{
                            flexDirection: 'row',
                            backgroundColor: colors.primary,
                            width: 130,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <Text style={{color: colors.text, fontSize: 20}}>
                            Entrar
                        </Text>
                        <Icon
                            name="chevron-forward-outline"
                            color={colors.text}
                            size={30}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
    },
});

export default SlidesScreen;
