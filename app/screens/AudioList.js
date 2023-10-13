// import { View, Text, StyleSheet } from 'react-native'
// import React, { useEffect } from 'react'
// import * as MediaLibrary from 'expo-media-library';

// const AudioList = () => {

//   const  getPermission = async () => {
       
//     const permission = await MediaLibrary.getPermissionsAsync();
//     console.log(permission);
//   };

// useEffect(() =>{
//   getPermission()

// },[]);


//   return (
//     <View style={styles.container}>
//       <Text>Audio List</Text>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent:'center',
//         alignItems:'center'

//     }
// })


// export default AudioList;
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from '../context/AudioProvider';

export class AudioList extends Component {
  static contextType = AudioContext
  
  render() {
    return (
      <ScrollView>
        {this.context.audioFiles.map(items => <Text key={items.id}>{items.filename}</Text> )}
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center'

  }
});

export default AudioList
