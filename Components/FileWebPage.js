/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux'
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
import {fetchUsers} from '../Redux/Actions'
import 'react-native-gesture-handler';
//import {fetchUsers} from '../Redux'
import food from '../Images/food.png';
import mario from '../Images/mario-2.png';
import KarachiBakery from '../Images/KarachiBakery.jpg';
import paradise from '../Images/ParadiseBiryani.jpg';
import BackImage from '../Images/BackImage.jpg';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Autocomplete from 'react-native-autocomplete-input';

import {
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class FileWebPage extends React.Component{
  constructor(props){
    super(props);
    this.state={url:null,
      flag:false,
        restn:['KarachiBakery','ParadiseBiryani'],
        query: '',
    
    }
  }
  componentDidMount(){ 
  }
  
 
   Imagefunction = (name) => {
    const { navigate } = this.props.navigation;
    this.props.fetchUsers(name)
    .then(
      res=>{
        this.fun1(res.websiteUrl)
      }
    )
    
   }
   fun1 = (MyUrl) => {  
    this.props.navigation.navigate('Website', {
      id:123,
      url:MyUrl,
    })
  }

  

  textFunction=(name) => {
      this.setState({reasturant:name})
      
      
  }
  findRest(query) {
   
    if (query === '') {
      return [];
    }
    const {restn}= this.state;
    //alert(restn)
    const regex = new RegExp(`${query.trim()}`, 'i');
    return restn.filter(film => film.search(regex) >= 0);
  }
  buttonClickListener=()=>{

      let {query}=this.state;
      if (query===undefined){
          alert('enter valid name')
          return 
      }
      const { navigate } = this.props.navigation;
      navigate('ImageDetails',
      {
          ImageName:query,
          
      }
    )
      
      

  }

  render(){
    const { query } = this.state;
    const films = this.findRest(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
    
            
          <View style={styles.headerSyle}>
            <Image source={mario} style={styles.logo} />
            <Autocomplete
          autoCapitalize={true}
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={films.length === 1 && comp(query, films[0]) ? [] : films}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter the Resturant Name"
          
        />
            
            <Button
          title="Search"
          onPress={() => this.buttonClickListener()}
        />
            

          </View>
          <View >
         
          <TouchableOpacity 
            style={ styles.button } 
            onPress={ () => this.Imagefunction("KarachiBakery")}
           
            
            >
            
          <Image source={KarachiBakery} style={styles.ImageSize} />
          </TouchableOpacity>
        
          <Text style={styles.ImageText}>Want To eat Biscuits or Fresh Sweets we are oldest Bakery and having more then 150 branches in India.
          So What are you waiting for come and Try something special that we made for you</Text>
          <TouchableOpacity 
            style={ styles.button } 
            onPress={ () => this.Imagefunction("ParadiseBiryani")}
           
            
            >
           
            
          <Image source={paradise} style={styles.ImageSize} />
        <Text style={styles.ImageText}>
          Paradise Hotel serves Hyderabadi dum biryani, Kebabs, Chinese cuisine,
          Tandoori cuisine, and Hyderabadi haleem during the month of Ramzan.
          
        </Text>
        </TouchableOpacity>
        
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
}
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
  text:{
    fontSize:40,
    color:'white',
    lineHeight:42
  },
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
    backgroundColor: "white",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "black",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "black",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: "black",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const mapStateToProps = state => {
    return {
      users: state.users,
      
    }
    
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers: (name)=> dispatch(fetchUsers(name)),
      
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FileWebPage)
