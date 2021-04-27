import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MovieSearchResultsCard from '../../components/cards/movieSearchResultsCard/movieSearchResultsCard'

import mainValues from '../../modules/values/mainValues';
import { getData } from '../../actions/storage';


MovieFavScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchFav()
    }, [])

    useFocusEffect(useCallback(() => {
        fetchFav()
    }, []));

    const fetchFav = async () => {
        setLoading(true)
        let data = await getData();
        console.log(data)
        setList(data)
        setLoading(false)
    }

    renderFavItem = ({ item }) => {
        return (
            <MovieSearchResultsCard
                navigation={navigation}
                item={item.item}
                id={item.id}
            />
        )
    }

    if (loading) return <ActivityIndicator style={{ marginTop: mainValues.marginBig }} size="large" />
    return (
        <>
            <FlatList
                style={{ flex: 1 }}
                data={list}
                refreshing={loading}
                onRefresh={() => fetchFav()}
                renderItem={(item) => renderFavItem(item)}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginTop: mainValues.marginMeduim }}>NO FAV MOVIES YET</Text>}
            />
        </>
    )
}

export default MovieFavScreen

