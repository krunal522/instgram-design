/** instagram story  page Style  */

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 28,
     
    },
    storyMain: {
        // flexDirection: 'column',
        // width: '100%',
        paddingHorizontal: 12,
        position: 'relative',
        justifyContent: 'center',
    },
    plusiconMain: {
        position: 'absolute',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    plusIcon: {
        fontSize: 24,
        color: colors.black,
    },
    storyImg: (data) => ({
        width: 56,
        height: 56,
        backgroundColor: data.id == 1 ? '#' : 'white',
        borderWidth: 0.5,
        borderRadius: 40,
        borderColor: data.id == 1 ? '#E1E1E5' : '#c13584',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: (data.id == 1 ? 'dashed' : 'solid'),
        borderWidth: 2,
    }),
    storyimg: {
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'row'
    },
    userText: {
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 10,
        marginVertical: 8,
        fontWeight: fontFamily.light,
        fontWeight: '500',
        color: colors.black,
        lineHeight: 13,
    }
});
export default styles;


