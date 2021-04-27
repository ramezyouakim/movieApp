import { Dimensions, StyleSheet } from 'react-native';
import values from '../values/mainValues';
import colors from '../values/colors';
import fontMaker from '../utilities/fontMaker';

/**Global Style Sheet */
export default mainStyle = StyleSheet.create({
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    row_space_between: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    card: {
        backgroundColor: colors.white,
        margin: values.marginMeduim,
        marginBottom: 0,
        borderRadius: values.BorderRadius / 2,
        overflow: 'hidden'
    },
    thumbnailImageContainer: {
        flex: 3,
    },
    thumbnailImage: {
        height: Dimensions.get('screen').height * 0.15,
        resizeMode: 'cover',

    },
    movieResulstCardInfo: {
        flex: 5,
        flexDirection: 'column',
        margin: values.marginSmall * 1.5,
        marginLeft: values.marginMeduim,
        justifyContent: 'space-between'
    },
    InfoTitle: {
        ...fontMaker(20, "bold"),
        marginTop: values.marginSmall
    },
    movieInfoOriginalLanguageContainer: {
        borderRadius: values.BorderRadius,
        borderWidth: 0.5,
        padding: values.paddingSmall / 2,
        paddingLeft: values.paddingSmall,
        paddingRight: values.paddingSmall,
        backgroundColor: colors.black,
        marginRight: values.marginSmall
    },
    movieInfoOriginalLanguageContainerText: {
        ...fontMaker(12, 'bold', colors.white)
    },
    releaseDateText: {
        ...fontMaker(12, 'normal', colors.subHeaders)
    },
    movieBackPosterImageContainer: {
        height: 350,
    },
    movieBackPosterImage: {
        flex: 1
    },
    movieBackPosterImageDimColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    moviePosterThumbnail: {
        flexDirection: 'row',
        position: 'absolute',
        left: 30,
        bottom: -90,
    },
    moviePosterThumbnailImage: {
        height: 200,
        width: 120,
        borderRadius: 10
    },
    movieTitle: {
        ...fontMaker(20, "600", colors.white),
        marginRight: 50
    },
    movieTitleRateContainer: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
    },
    MovieDetailsInfoOverviewContainer: {
        margin: values.marginMeduim,
        marginTop: 120
    },
    MovieDetailsInfoOverview: {
        marginBottom: values.marginBig
    },
    movieDetailInfoItemDescription: {
        marginTop: values.marginMeduim
    },
    addToFavIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: values.imagesSmall,
        height: values.imagesSmall,
        zIndex:20
    }
})