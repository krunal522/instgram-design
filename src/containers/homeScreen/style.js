/** ongoing Mainhome screen  page Style  */

import { StyleSheet } from 'react-native';
import font from '../../utils/fontFamily/index'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mainheader: {
        marginTop: 56,
        marginHorizontal: 16,
    },
    headerFirstTitle: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        fontFamily: font.light,
    },
    secondTitle: {
        fontWeight: '700',
        fontSize: 24,
        fontFamily: font.light,
        marginTop: 4
    },
    imageMain: {
        backgroundColor: '#F7F7FA',
        width: 48,
        height: 48,
        flex: 1,
        alignSelf: 'flex-end',
        borderRadius: 48,
        position: 'absolute',
        padding: 10,
        alignItems: 'center',
    },
    smsIcon: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    divider: {
        marginTop: 16
        // marginVertical: 16
        // marginBottom: 16
    }
});
export default styles;