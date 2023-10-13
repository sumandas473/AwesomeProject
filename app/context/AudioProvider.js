import { Text, View,Alert } from 'react-native'
import React, { Component ,createContext} from 'react'
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext()

export class AudioProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
          audioFiles : []
        }
    }

    permissionAllert = () =>{
        Alert.alert("Permission Required","This app needs to read to audio files",[{
            Text: 'i m ready',
        onPress: () => this.getPermission()
           },
        {
            Text:'cancel',
            onPress: () => this.permissionAllert()

        }])

    }

    getAudioFiles = async () => {
      let media = await MediaLibrary.getAssetsAsync({
        mediaType:'audio',
        
      });
      media = await MediaLibrary.getAssetsAsync({
        mediaType:'audio',
        first: media.totalCount,
      });

      this.setState({...this.state, audioFiles: media.assets})
      // console.log(media)
    };



    getPermission = async () => {
       
        const permission = await MediaLibrary.getPermissionsAsync()
        if(permission.granted){
          this.getAudioFiles()

        }

        if(!permission.granted && permission.canAskAgain){
          const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();

          if(status === 'denied' && canAskAgain){
            this.permissionAllert()

          }
          if(status === 'granted'){
            this.getAudioFiles();

          }
          if(status === 'denied' && !canAskAgain){

          }

        }

        // console.log(permission)
    }


    componentDidMount(){
        this.getPermission()
    }
  render() {
    return (
      <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioProvider