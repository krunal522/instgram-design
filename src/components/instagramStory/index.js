import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Stories = (props) => {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../../assets/storyimages/storymem3.png'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../../assets/storyimages/storymem4.png'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/storyimages/storymem2.png'),
    },
    ,
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.mainContainer}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={styles.storyMain}>
              {data.id == 1 ? (
                <View
                  style={styles.plusiconMain}>
                  <AntDesign
                    name="plus"
                    style={styles.plusIcon}
                  />
                </View>
              ) : null}
              <View
                style={styles.storyImg(data)}>
                <Image
                  source={data.image}
                  style={styles.storyimg}
                />
              </View>
            </View>
            <Text
              style={styles.userText}>
              {data.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
