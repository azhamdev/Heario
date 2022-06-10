import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ImagesList } from '../../assets/images'
import { ms } from 'react-native-size-matters'
import { ColorsList } from '../../utils/Colors'
import Gap from '../../components/Gap'
import Input from '../../components/Input'
import Button from '../../components/Button'
import auth from '@react-native-firebase/auth'

export default function Register({ navigation }) {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const btnRegister = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('User account created & signed in!', res);
                navigation.navigate('Chat')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use')
                {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email')
                {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image
                    source={ImagesList.ornament2}
                    style={styles.topOrnament}
                />
                <View style={styles.content}>
                    <Text style={styles.Text}>Hey</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Text1}>Register </Text>
                        <Text style={styles.Text}>Now</Text>
                    </View>
                    <Gap height={ms(16)} />
                    <Text style={{ color: '#848484', fontFamily: 'OpenSans-Light' }}>Were glad youre here</Text>
                    <Gap height={ms(37)} />
                    <Input
                        placeholder={'Username'}
                        value={userName}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <Gap height={ms(22)} />
                    <Input
                        placeholder={'youremail@gmail.com'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Gap height={ms(22)} />
                    <Input
                        placeholder={'Password'}
                        secure
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Gap height={ms(55)} />
                    <Button title={"Register"} onPressButton={btnRegister} />
                    <Gap height={ms(22)} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#848484', fontFamily: 'OpenSans-Light' }}>if you have an account </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}>
                            <Text
                                style={
                                    {
                                        color: '#000',
                                        fontSize: ms(15),
                                        fontFamily: 'OpenSans-Bold',
                                        textDecorationLine: 'underline'
                                    }}>
                                Login Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    topOrnament: {
        height: ms(200),
        width: '100%',
    },
    Text: {
        fontFamily: 'OpenSans-Bold',
        fontSize: ms(26)
    },
    Text1: {
        fontFamily: 'OpenSans-Bold',
        fontSize: ms(26),
        color: ColorsList.Primary
    },
    content: {
        paddingHorizontal: ms(30)
    },
    input: {
        backgroundColor: '#EBEBEB',
        height: ms(51),
        borderRadius: ms(10),
        fontSize: ms(14),
        paddingHorizontal: ms(17),
        marginBottom: ms(22)
    },
    button: {
        backgroundColor: ColorsList.Primary,
        paddingVertical: ms(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ms(12),
    },
    logo: {
        height: ms(46),
        width: ms(111)
    }
})