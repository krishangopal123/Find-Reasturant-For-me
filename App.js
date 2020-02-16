/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import 'react-native-gesture-handler';
import food from './Images/food.png';
import mario from './Images/mario-2.png';
import KarachiBakery from './Images/KarachiBakery.jpg';
import paradise from './Images/ParadiseBiryani.jpg';
import BackImage from './Images/BackImage.jpg';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WebPage from './Components/WebPage'
import ReasturantData from './Components/ReasturantData'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FileWebPage from './Components/FileWebPage.js'
const Stack = createStackNavigator();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={url:null}
  }
  
  render(){
    //const { navigate } = this.props.navigation;
  return (
    
          
          <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FileWebPage} />
        <Stack.Screen name="Website" component={WebPage} />
        <Stack.Screen name="ImageDetails" component = {ReasturantData} />

        
      </Stack.Navigator>
    </NavigationContainer>
    
            
          
          

        
  );
}
};



export default App;
