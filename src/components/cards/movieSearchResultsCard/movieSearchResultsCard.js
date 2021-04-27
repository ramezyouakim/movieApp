import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

// import style
import mainStyle from '../../../modules/style/mainStyle';

//components
import TypeItemComponent from '../../common/typeItemComponent/typeItemComponent';
import Rate from '../../../components/common/rate/rate';

// style classes
const {
    shadowBox,
    thumbnailImageContainer,
    thumbnailImage,
    movieResulstCardInfo,
    InfoTitle,
    row,
    card,
    releaseDateText
} = mainStyle;

import config from '../../../config';

export default MovieSearchResultsCard = ({ item, id, navigation }) => {
    const { poster_path, original_title, original_language, release_date, vote_average } = item;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieDetailInfoScreen', { id: id, item })}>
            <View style={[shadowBox]}>
                <View style={[card, row]}>
                    <View style={thumbnailImageContainer}>
                        <SharedElement id={`movieItem.${id}.moviePosterImage`}>
                            <Image
                                source={{ uri: config.movieImagesBaseUrl + poster_path }}
                                style={thumbnailImage}
                            />
                        </SharedElement>
                    </View>
                    <View style={movieResulstCardInfo}>
                        <Text style={InfoTitle}>{original_title}</Text>
                        <View style={[row, { alignItems: 'center' }]}>
                            <Text style={releaseDateText}>{release_date} </Text>
                            <Rate rate={vote_average} />
                        </View>
                        <TypeItemComponent style={{ alignSelf: 'flex-start' }} type={original_language} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}