import React from 'react';
import { View, Text, Image, ScrollView, Platform } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { connect } from 'react-redux'

// import components
import TypeItemComponent from '../../components/common/typeItemComponent/typeItemComponent';
import Rate from '../../components/common/rate/rate';
import FavIcon from '../../components/common/favIcon/favIcon';

// import style
import mainStyle from '../../modules/style/mainStyle';

import config from '../../config';

// style classes
const {
    shadowBox,
    movieBackPosterImage,
    moviePosterThumbnail,
    moviePosterThumbnailImage,
    movieBackPosterImageDimColor,
    movieTitle,
    movieTitleRateContainer,
    movieBackPosterImageContainer,
    MovieDetailsInfoOverviewContainer,
    InfoTitle,
    releaseDateText,
    row,
    MovieDetailsInfoOverview,
    movieDetailInfoItemDescription,
    addToFavIcon
} = mainStyle;

MovieDetailsInfoScreen = (props) => {

    const { id, item } = props.route.params;
    const { poster_path, backdrop_path, original_title, original_language, release_date, vote_average, vote_count, overview, genre_ids } = item;
    const { movieGenresList } = props;

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <View style={movieBackPosterImageContainer}>
                    <Image
                        source={{ uri: config.movieImagesBaseUrl + backdrop_path }}
                        style={movieBackPosterImage}
                    />
                    <View style={movieBackPosterImageDimColor}>
                        <FavIcon id={id} item={item} />
                    </View>
                </View>
                <SharedElement style={moviePosterThumbnail} id={`movieItem.${id}.moviePosterImage`}>
                    <View style={shadowBox}>
                        <Image
                            source={{ uri: config.movieImagesBaseUrl + poster_path }}
                            style={[moviePosterThumbnailImage]}
                        />
                    </View>
                    <View style={movieTitleRateContainer}>
                        <View style={{ flex: 3 }}>
                            <Text style={[releaseDateText, { color: '#fff' }]}>{release_date}</Text>
                            <Text style={[movieTitle, shadowBox]}>{original_title}</Text>
                        </View>
                        <View style={[row, { alignItems: 'center', flex: 1 }]}>
                            <TypeItemComponent type={original_language} />
                            <Rate rate={vote_average} count={vote_count} />
                        </View>
                    </View>
                </SharedElement>
            </View>
            <View style={MovieDetailsInfoOverviewContainer}>
                <View style={MovieDetailsInfoOverview}>
                    <Text style={InfoTitle}>Genres</Text>
                    <View style={[row, movieDetailInfoItemDescription]}>{
                        genre_ids.map((i) => movieGenresList[i] && <TypeItemComponent type={movieGenresList[i]?.name} />)
                    }</View>
                </View>
                <View style={MovieDetailsInfoOverview}>
                    <Text style={InfoTitle}>Overview</Text>
                    <Text style={movieDetailInfoItemDescription}>{overview}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
// if (Platform.OS == 'ios') {
    MovieDetailsInfoScreen.sharedElements = route => {
        const { id } = route.params;
        return [
            {
                id: `movieItem.${id}.moviePosterImage`,
                animation: 'move',
                resize: 'clip'
            }
        ];
    };
// }

const mapStateToProps = ({ movie }) => {
    const {
        movieGenresList
    } = movie;

    return {
        movieGenresList
    }
}

export default connect(mapStateToProps)(MovieDetailsInfoScreen)

