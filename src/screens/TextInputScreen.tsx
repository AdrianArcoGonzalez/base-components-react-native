import React, {useContext} from 'react';
import {
    Platform,
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import Header from '../components/Header';
import useForm from '../hooks/useForm';
import {ThemeContext} from '../context/ThemeContext';

const TextInputScreen = () => {
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    const {form, onChange} = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <Header text="Text Input" />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.containerMargin}>
                        <TextInput
                            style={{
                                ...styles.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese un nombre"
                            autoCorrect={false}
                            autoCapitalize={'words'}
                            onChangeText={value => {
                                onChange(value, 'name');
                            }}
                        />

                        <TextInput
                            style={{
                                ...styles.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            keyboardType="email-address"
                            autoCapitalize={'none'}
                            onChangeText={value => {
                                onChange(value, 'email');
                            }}
                        />
                        <TextInput
                            style={{
                                ...styles.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su telefono"
                            keyboardType="number-pad"
                            onChangeText={value => {
                                onChange(value, 'phone');
                            }}
                        />
                        <View>
                            <Text>Suscribirme</Text>
                            <CustomSwitch
                                isOn={form.initialState.isSuscribed}
                                onChange={value => {
                                    onChange(value, 'isSuscribed');
                                }}
                            />
                        </View>
                        <View />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    containerMargin: {
        marginHorizontal: 20,
    },
    inputStyle: {
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
    },
});

export default TextInputScreen;
