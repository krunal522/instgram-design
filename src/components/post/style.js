/** post Component  page Style  */

import { StyleSheet } from 'react-native';
import fontFamily from '../../utils/fontFamily';

const styles = StyleSheet.create({
    postContainer: {
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.1,
    },
    userImg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    userMain: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImg: {
        width: 40,
        height: 40,
        borderRadius: 40,
        resizeMode: 'cover'
    },
    postTitle: {
        paddingLeft: 8,
    },
    postsubTitle: {
        fontSize: 14,
        fontFamily: fontFamily.light,
        lineHeight: 19,
        fontWeight: '700'
    },
    postMainContetnt: {
        paddingHorizontal: 16,
        // marginLeft: 16
    },
    postText: {
        fontWeight: '500',
        color: '#1A1A33',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Satoshi'
    },
    postImg: {
        alignItems: 'center',
        marginTop: 12
    },
    postImages: {
        width: '86%',
        height: 180,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    socialMainIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    socialSecondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainImg: {
        flexDirection: 'row',
    },
    likesIcon: {
        marginLeft: 4,
        alignSelf: 'center',
        fontSize: 12,
        lineHeight: 17,
        fontWeight: '500',
        flexDirection: 'row',
        color: '#1A1A33',
    },
    messageimg: {
        marginHorizontal: 24,
        width: 20,
        height: 20
    },
    chatimg: {
        width: 20,
        height: 20
    },
    like: (like) => ({
        fontSize: 20,
        color: like ? 'red' : 'black',
    })
});
export default styles;


