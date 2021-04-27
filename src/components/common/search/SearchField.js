import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import style from './SearchField.style';
import { connect } from 'react-redux';

// import actions 
import { fetchMoviesBySearch } from '../../../actions/mainActions';

SearchField = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const { fetchMoviesBySearch } = props;
    return (
        <View>
            <TextInput
                style={style.searchField}
                accessibilityLabel={'Search by movie name'}
                autoCapitalize={'none'}
                placeholder={'Search by movie name'}
                onChangeText={(value) => setSearchQuery(value)}
                underlineColorAndroid={'transparent'}
                value={searchQuery}
                onSubmitEditing={() => fetchMoviesBySearch(searchQuery)}
            />
        </View>
    )
};

export default connect(null, {
    fetchMoviesBySearch
})(SearchField)