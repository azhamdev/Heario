import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'
import { ms } from 'react-native-size-matters'

export default function Book() {
    return (
        <View style={styles.container}>
            <Pdf source={{ uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true }}
                style={{ width: ms(300), height: ms(300) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})