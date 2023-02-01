//Mainhome Screen page Details
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import styles from './style';
import Stories from '../../components/instagramStory/index';
import Divider from '../../components/divider/index';
import Post from '../../components/post';

// create a component
const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainheader}>
                <Text style={styles.headerFirstTitle}>Hello, Selena!</Text>
                <View style={styles.imageMain}>
                    <Image source={require('../../assets/storyimages/sms.png')} />
                </View>
                <Text style={styles.secondTitle}>Let's Meet New Friends</Text>
            </View>
            <ScrollView>
                <View>
                    <Stories />
                </View>
                <View style={styles.divider}>
                    <Divider />
                </View>
                <View>
                    <Post />
                </View>
            </ScrollView>
        </View>
    );
};


//make this component available to the app
export default HomeScreen;
