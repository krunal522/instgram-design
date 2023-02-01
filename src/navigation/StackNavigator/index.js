import React from 'react';
import { ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './../../containers/homeScreen/index';
import searchComponent from '../../components/searchComponent/index';
import reelsComponent from '../../components/reelsComponent/index';
import activityComponent from '../../components/activityComponent/index';
import profilecomponent from '../../components/profilecomponent/index';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Status from '../../components/status/index';
import friendProfile from '../../components/friendProfile/index';
import editProfile from '../../components/editProfile/index';

const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = (focused) => {
    return (
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          tabBarInactiveTintColor: '#C0C0C0',
          tabBarStyle: {
            // height: 50,
          },
          tabBarSelectedItemStyle: {
            borderBottomWidth: 2,
            borderBottomColor: 'red',

          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 0,
            alignSelf: "center",
            justifyContent: 'center',
            marginVertical: 0,
            marginBottom: 6,
            paddingVertical: 0,
          },
          tabBarStyle: {
            height: 60,
            // borderTopColor:'#efbb55',
            // borderTopWidth:2,
            backgroundColor: '#f9fcf9'
          }

        }}
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Home"
          component={homeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color }) => (
              <ImageBackground
                resizeMode='contain'
                source={require('../../assets/bottomtabicon/home.png')}
                style={{ width: 26, height: 26, alignSelf: 'center', alignItems: 'center' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={searchComponent}

          options={{
            headerShown: false,
            tabBarLabel: 'Search',
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color }) => (
              <ImageBackground
                resizeMode='contain'
                source={require('../../assets/bottomtabicon/search.png')}
                style={{ width: 26, height: 26, alignSelf: 'center', alignItems: 'center' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Reels"
          component={reelsComponent}
          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color }) => (
              <ImageBackground
                resizeMode='contain'
                source={require('../../assets/bottomtabicon/addpost.png')}
                style={{ width: 26, height: 26, alignSelf: 'center', alignItems: 'center' }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Discover"
          component={activityComponent}
          options={{
            tabBarLabel: 'discover',
            headerShown: 'false',
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color }) => (
              <>
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomtabicon/discover.png')}
                  style={{ width: 26, height: 26, alignSelf: 'center', alignItems: 'center' }}
                />
              </>
            ),

          }}
        />
        <Tab.Screen
          name="profile"
          component={profilecomponent}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color }) => (
              // <AntDesign name="shoppingcart" size={26} color="black" />,
              <ImageBackground
                resizeMode='contain'
                source={require('../../assets/bottomtabicon/profile.png')}
                style={{ width: 26, height: 26, alignSelf: 'center', alignItems: 'center' }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="friendProfile" component={friendProfile} />
        <Stack.Screen name="editProfile" component={editProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
