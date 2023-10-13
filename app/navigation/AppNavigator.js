
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import Playlist from '../screens/Playlist';
import { Ionicons,FontAwesome5,MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()
export default function AppNavigator() {
  return(
    <Tab.Navigator> 
        <Tab.Screen name='AudioList' component={AudioList} options={{
            tabBarIcon:({color, size}) =>
                ( <Ionicons name="ios-headset-sharp" size={size} color={color} />),
        
        }}/>
        <Tab.Screen name='Player' component={Player} options={{
            tabBarIcon:({color, size}) =>
                ( <FontAwesome5 name="compact-disc" size={size} color={color} />),
        
        }}/>
        <Tab.Screen name='Playlist' component={Playlist} options={{
            tabBarIcon:({color, size}) =>
                ( <MaterialIcons name="playlist-play" size={size} color={color} />),
        
        }}/>
    </Tab.Navigator>
  );
}