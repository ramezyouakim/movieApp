import values from '../values/mainValues';
import { normalizeFontSize } from './sizeCal';

export default function fontMake(fontSize = values.fontMeduim, fontWeight = 'normal', fontColor = values.header) {
    return {
        fontSize: normalizeFontSize(fontSize),
        fontWeight: fontWeight,
        color: fontColor
    }
}