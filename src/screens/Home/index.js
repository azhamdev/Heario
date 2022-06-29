import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ms } from 'react-native-size-matters';
import Gap from '../../components/Gap';
import { ImagesList } from '../../assets/images';

export default function Home({ navigation }) {
    const [dataPokemon, setDataPokemon] = useState();
    const [DetailDataPokemon, setDetailDataPokemon] = useState();
    const getDataPokemon = async () => {
        try
        {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon', {
                params: {
                    offset: 0,
                    limit: 20,
                },
            });
            const pokemon = res.data.results;
            setDataPokemon(pokemon);
        } catch (error)
        {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getDataPokemon();
    }, []);



    const ShowPokemon = ({ item }) => {
        const detail = () => {
            console.log(`"${item.url}"`)
        }

        const getDetailPokemon = async () => {
            try
            {
                const res = await axios.get(`${item.url}`);
                // const result = await axios.get(res);
                const Detailpokemon = res;
                console.log(Detailpokemon);
                // setDetailDataPokemon(Detailpokemon);
            } catch (error)
            {
                console.log(error.message);
            }
        };


        return (
            <TouchableOpacity style={styles.cardContainer} onPress={getDetailPokemon} >
                <View>
                    <Image style={styles.imagePoke} source={ImagesList.PokeBall} />
                    <Gap height={ms(15)} />
                    <Text style={styles.namePoke}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>

            {console.log(dataPokemon)}
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                    <Text>
                        Ke detail
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={dataPokemon}
                    horizontal={false}
                    keyExtractor={(item, index) => index}
                    renderItem={ShowPokemon}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: ms(20),
        paddingBottom: ms(0),
        backgroundColor: '#9DD6DF',
        flex: 1,
        flexDirection: 'row',
    },
    cardContainer: {
        backgroundColor: '#FFFFDE',
        height: ms(200),
        width: ms(120),
        borderRadius: ms(12),
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: ms(5),
        marginVertical: ms(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePoke: {
        resizeMode: 'contain',
        height: ms(60),
        width: ms(60),
    },
    namePoke: {
        fontSize: ms(20),
        fontWeight: '800',
        textAlign: 'center',
        color: '#000',
    },
});
