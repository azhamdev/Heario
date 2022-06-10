import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { ColorsList } from '../../utils/Colors'

export default function Button({ title, onPressButton }) {
    return (
        <View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.textBtn}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: ColorsList.Primary,
        paddingVertical: ms(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ms(12),
    },
    textBtn: {
        color: '#fff',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: ms(14)
    }
})