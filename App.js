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
  Dimensions
} from 'react-native';
import food from './Images/food.png';
import mario from './Images/mario-2.png';
import KarachiBakery from './Images/KarachiBakery.jpg';
import paradise from './Images/ParadiseBiryani.jpg';
import BackImage from './Images/BackImage.jpg';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.headerSyle}>
            <Image source={mario} style={styles.logo} />
            <TextInput
              placeholder="Enter Reasturant Name"
              placeholderTextColor="black"
              style={styles.textinput}
            >
            </TextInput>

          </View>
          
          <View >
          <Image source={KarachiBakery} style={styles.ImageSize} />
          <Text style={styles.ImageText}>Want To eat Biscuits or Fresh Sweets we are oldest Bakery and having more then 150 branches in India.
          So What are you waiting for come and Try something special that we made for you</Text>
          
          <Image source={paradise} style={styles.ImageSize} />
        <Text style={styles.ImageText}>
          Paradise Hotel serves Hyderabadi dum biryani, Kebabs, Chinese cuisine,
          Tandoori cuisine, and Hyderabadi haleem during the month of Ramzan.
          
        </Text>
        
          </View>
          <View>
            <Image source={BackImage} style={styles.fotterImageSize}/>
            <TextInput style={styles.fotterTextSize}>
              Reasturant Near Me
            </TextInput>
          </View>
          

        </ScrollView>
      </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
    backgroundColor: "#9C9C9C",
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  headerSyle: {
    backgroundColor: "black",

  } ,
  ImageSize:{
    marginLeft:10,
    width:400,
    height:200,
    marginTop:30,
    alignItems:'center'

  },
  fotterImageSize:{
    opacity:0.2,
    width:"100%",
    height:200,
    marginTop:30,
    

  },
  fotterTextSize:{
    opacity:1,
    fontSize:30,
    color:"white",
    width:"67%",
    backgroundColor:"black",
    marginTop:40,
    position:"absolute"
    

  },
  textinput: {
    height: 30,
    width: 240,
    marginLeft:150,
    marginTop:30,
    position:"absolute",
    
    backgroundColor: "white"

  },
  ImageText:{
    fontSize:20,
    
    textAlign:'center'

  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
