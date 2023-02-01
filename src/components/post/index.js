// post Design Implemented

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import Divider from '../divider';

const Post = () => {
  const postInfo = [
    {
      id: 0,
      postTitle: 'mr shermon',
      postPersonImage: require('../../assets/storyimages/storymem2.png'),
      postImage: require('../../assets/storyimages/post.png'),
      likes: '1.6k likes',
      hours: '3 hr ago',
      content: 'That was the first time I flew out of Singapore in three years. I am so happy 😍🔥\n\n #proud',
      isLiked: false,
    },
    {
      id: 1,
      postTitle: 'chillhouse',
      postPersonImage: require('../../assets/storyimages/storymem2.png'),
      postImage: require('../../assets/storyimages/post.png'),
      likes: '1.6k likes',
      hours: '5 hr ago',
      content: 'That was the first time I flew out of Singapore in three years. I am so happy 😍🔥\n\n #proud',
      isLiked: false,
    },
    {
      id: 2,
      postTitle: 'Tom',
      postPersonImage: require('../../assets/storyimages/storymem2.png'),
      postImage: require('../../assets/storyimages/post.png'),
      likes: '1.6k likes',
      hours: '10 hr ago',
      content: 'That was the first time I flew out of Singapore in three years. I am so happy 😍🔥\n\n #proud',
      isLiked: false,
    },
    {
      id: 3,
      postTitle: 'The_Groot',
      postPersonImage: require('../../assets/storyimages/storymem2.png'),
      postImage: require('../../assets/storyimages/post.png'),
      likes: '1.6k likes',
      hours: '20 hr ago',
      content: 'That was the first time I flew out of Singapore in three years. I am so happy 😍🔥\n\n #proud',
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={styles.postContainer}>
            <View
              style={styles.userImg}>
              <View style={styles.userMain}>
                <Image
                  source={data.postPersonImage}
                  style={styles.postImg}
                />
                <View style={styles.postTitle}>
                  <Text style={styles.postsubTitle}>
                    {data.postTitle}
                  </Text>
                  <Text style={styles.userHours}>
                    {data.hours}
                  </Text>
                </View>
              </View>

            </View>
            <View style={styles.postMainContetnt}>
              <Text style={styles.postText}>
                {data.content}
              </Text>
            </View>
            <View
              style={styles.postImg}>
              <Image
                source={data.postImage}
                style={styles.postImages}
              />
            </View>
            <View
              style={styles.socialMainIcon}>
              <View style={styles.socialSecondContainer}>
                <TouchableOpacity style={styles.mainImg} onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={styles.like(like)}
                  />
                </TouchableOpacity>
                <Text style={styles.likesIcon}>{data.likes}</Text>
                <TouchableOpacity>
                  <Image style={styles.messageimg} source={require('../../assets/storyimages/messagetext.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.chatimg} source={require('../../assets/storyimages/chatmessage.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              {
                data.id !== 3 ? (<Divider />) : ''
              }
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
