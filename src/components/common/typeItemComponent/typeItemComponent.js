import React from 'react';
import { View, Text } from 'react-native';
import mainStyle from '../../../modules/style/mainStyle';

const {
    movieInfoOriginalLanguageContainer,
    movieInfoOriginalLanguageContainerText
} = mainStyle;

export default TypeItemComponent = ({ type, style }) => {
    return (
        <View style={[movieInfoOriginalLanguageContainer, style]}>
            <Text style={movieInfoOriginalLanguageContainerText}>{type}</Text>
        </View>
    );
}