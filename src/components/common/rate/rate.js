import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './rate.style';
import mainStyle from '../../../modules/style/mainStyle'

export default Rate = ({ rate, count }) => {
    return (
        <View style={[mainStyle.row, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
            <Image
                source={require('../../../assets/icons/star.png')}
                style={style.starIcon}
            />
            <Text> {rate} {count && `(${count})`}</Text>
        </View>
    )
};