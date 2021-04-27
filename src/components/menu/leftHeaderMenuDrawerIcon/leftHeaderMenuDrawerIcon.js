import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import style from './LeftHeaderMenuDrawerIcon.style';

export default LeftHeaderMenuDrawerIcon = ({ back }) => {
    const navigation = useNavigation();
    if (back) return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../assets/icons/back.png')}
                    style={style.leftHeaderMenuDrawerIcon}
                />
            </TouchableOpacity>
        </View>
    )
    else return (
        <View>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Image
                    source={require('../../../assets/icons/menu.png')}
                    style={style.leftHeaderMenuDrawerIcon}
                />
            </TouchableOpacity>
        </View>
    )
};