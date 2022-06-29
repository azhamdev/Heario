import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import Gap from '../../components/Gap'

export default function Detail() {
    return (
        <View style={styles.container}>
            <Gap height={ms(24)} />
            <View style={styles.cardImages}>
                <Image style={styles.imageHero} source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png" }} />
            </View>
            <Text style={styles.TitlePokemon}>Charmander</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AEDBCE',
        flex: 1,
        padding: ms(14),
        paddingBottom: ms(0),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitlePokemon: {
        fontSize: ms(30),
        fontWeight: '900',
        color: '#F15412',
        textAlign: 'center'
    },
    imageHero: {
        height: ms(200),
        resizeMode: 'contain',
    },
    cardImages: {
        height: ms(220),
        borderRadius: ms(14),
        width: ms(220),
        padding: ms(14),
        justifyContent: 'center'
    }
})