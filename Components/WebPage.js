import React from 'react';
import {Text} from 'react-native'
import {WebView} from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function  WebPage({route}) {
    const { url } = route.params;
    return(
        <WebView useWebKit={true} source={{url: url}} />
    )
    
}
export default WebPage