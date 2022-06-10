import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Input({ placeholder, secure, value, onChangeText }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EBEBEB',
        height: ms(51),
        borderRadius: ms(10),
        fontSize: ms(14),
        paddingHorizontal: ms(17),
    },
})