import React, { PureComponent } from 'react';
import { View, Text, StatusBar, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'

// actions
import { fetchMoreMoviesBySearch, fetchMoviesGenres } from '../../actions/mainActions';

// components
import MovieSearchResultsCard from '../../components/cards/movieSearchResultsCard/movieSearchResultsCard';
import SearchField from '../../components/common/search/SearchField'
import mainValues from '../../modules/values/mainValues';

class HomeScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const {
            fetchMoviesGenres
        } = this.props;
        fetchMoviesGenres();
    }

    renderMovieResultItem({ item }) {
        return (
            <MovieSearchResultsCard
                navigation={this.props.navigation}
                item={item}
                id={item.id}
            />
        )
    }

    renderEmptyListView(errorMessage) {
        return (
            <View >
                <SearchField />
                {errorMessage?.length > 1 && <Text style={{ textAlign: 'center' }}>No Reuslts was found</Text>}
            </View>
        )
    }

    onEndReached() {
        const {
            fetchMoreMoviesBySearch
        } = this.props;

        if (!this.onEndReachedCalledDuringMomentum) {
            fetchMoreMoviesBySearch()
            this.onEndReachedCalledDuringMomentum = true;
        }
    }

    render() {
        const {
            loading,
            errorMessage,
            movieSearchResultsList,
            loadMore
        } = this.props;

        if (loading) return <ActivityIndicator style={{ marginTop: mainValues.marginBig }} size="large" />
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'dark-content'} />
                <SafeAreaView style={{ flex: 1, }}>
                    <FlatList
                        style={{ flex: 1 }}
                        ListHeaderComponent={() => movieSearchResultsList.length > 0 && <SearchField />}
                        data={movieSearchResultsList}
                        renderItem={(item) => this.renderMovieResultItem(item)}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={() => this.renderEmptyListView(errorMessage)}
                        onEndReached={() => this.onEndReached()}
                        onEndReachedThreshold={0.3}
                        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                        ListFooterComponent={() => loadMore && <ActivityIndicator size={'large'} style={{ margin: mainValues.marginMeduim }} />}
                    />
                </SafeAreaView>
            </View>
        )

    }

}

const mapStateToProps = ({ movie }) => {
    const {
        loading,
        errorTitle,
        errorMessage,
        movieSearchResultsList,
        loadMore
    } = movie;

    return {
        loading,
        errorTitle,
        errorMessage,
        movieSearchResultsList,
        loadMore
    }
}

export default connect(mapStateToProps, {
    fetchMoreMoviesBySearch,
    fetchMoviesGenres
})(HomeScreen)