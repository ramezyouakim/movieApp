import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/homeScreen/homeScreen';
import MovieDetailsInfoScreen from '../screens/movieDetailsInfoScreen/movieDetailsInfoScreen';
import MovieFavScreen from '../screens/movieFavScreen/movieFavScreen';


// Components
import LeftHeaderMenuDrawerIcon from '../components/menu/leftHeaderMenuDrawerIcon/leftHeaderMenuDrawerIcon';

// Main Navigators
const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="FAV" component={MovieFavScreen} />
        </Drawer.Navigator >
    );
}

// Main App Navigator
function AppNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={() => ({
                    headerLeft: () => <LeftHeaderMenuDrawerIcon />
                })}>
                <Stack.Screen name="home" options={() => ({ title: "Movie App" })} component={DrawerNavigator} />
                <Stack.Screen name="movieDetailInfoScreen" options={() => ({ title: "Movie Details", headerLeft: () => <LeftHeaderMenuDrawerIcon back /> })} component={MovieDetailsInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigator;