import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import mainStyle from '../../../modules/style/mainStyle';

import { toggleFav, isFav } from '../../../actions/storage';

export default FavIcon = ({ id, item }) => {
    const [isFavState, toggleFavState] = useState()
    useEffect(async () => {
        toggleFavState(await isFav(id));
    }, [])


    return (
        <TouchableOpacity onPress={() => { toggleFav(id, item); toggleFavState(!isFavState) }}>
            <Image
                source={isFavState ? require('../../../assets/icons/heart-on.png') : require('../../../assets/icons/heart-off.png')}
                style={mainStyle.addToFavIcon}
            />
        </TouchableOpacity>
    )
}