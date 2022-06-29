import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { ImagesList } from '../../assets/images';
import { ms } from 'react-native-size-matters';
import { ColorsList } from '../../utils/Colors';
import Gap from '../../components/Gap';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={ImagesList.ornament1} style={styles.topOrnament} />
                <View style={styles.content}>
                    <Text style={styles.Text}>Hey</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Text1}>Login </Text>
                        <Text style={styles.Text}>Now</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: ms(14),
                            marginBottom: ms(63),
                        }}>
                        <Text
                            style={{
                                color: '#848484',
                                fontFamily: 'OpenSans-Light',
                            }}>
                            if you’re new
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: ms(15),
                                    fontFamily: 'OpenSans-Bold',
                                    textDecorationLine: 'underline',
                                }}>
                                {' '}
                                Create New
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Input
                        placeholder={'Email'}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Gap height={ms(22)} />
                    <Input
                        placeholder={'Password'}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secure
                    />
                    <Gap height={ms(55)} />
                    <Button
                        title={'Login'}
                        onPressButton={() => navigation.navigate('Home')}
                    />
                    <Gap height={ms(40)} />
                    <View alignItems={'center'}>
                        <Image source={ImagesList.Logo} style={styles.logo} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topOrnament: {
        height: ms(195),
        width: '100%',
    },
    Text: {
        fontFamily: 'OpenSans-Bold',
        fontSize: ms(26),
    },
    Text1: {
        fontFamily: 'OpenSans-Bold',
        fontSize: ms(26),
        color: ColorsList.Primary,
    },
    content: {
        paddingHorizontal: ms(30),
    },
    input: {
        backgroundColor: '#EBEBEB',
        height: ms(51),
        borderRadius: ms(10),
        fontSize: ms(14),
        paddingHorizontal: ms(17),
        marginBottom: ms(22),
    },

    logo: {
        height: ms(46),
        width: ms(111),
    },
});
