import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import Notification from '../screens/MyNotification'
const MyHeader = props => {
  const BellIconWithBage =(props)=>{
    return(
      <View>
        <Icon name = 'bell' type ='font-awesome' color = '#696969' size = {25}
        onPress = {()=>props.navigation.navigate('Notification')}/>

        <Badge 
        value = "1" containerStyle = {{position:'absolute',top:-4, right:-4}}
        ></Badge>
      </View>
    )
  }
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      rightComponent = {<BellIconWithBage{...props}/>}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default MyHeader;
