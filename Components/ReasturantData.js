import React , { useState }  from 'react';

import {Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {WebView} from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function  ReasturantData({route,navigation}) {
    Imagefunction=(name)=>{
        const { navigate } = navigation;
        
        let completeUrl="http://localhost:8080/food?foodName="+name
       
        fetch(completeUrl)
        .then((response) => response.json())
        .then((responseJson) => {
          navigate('Website', {
            id:123,
            url:responseJson.websiteUrl,
          });
        })
        .catch((error) => {
          alert(error)
        });
      }
    //const { url } = route.params;
    const [url, setUrl] = useState(0);
    const [fileName,setFileName] = useState(0);
    const [fileContent , setFileContent] = useState(0);
    const [Image1,setFileImage] = useState(0)

    const {ImageName}=route.params
    const { navigate } = navigation;
    let completeUrl="http://localhost:8080/food?foodName="+ImageName;
    fetch(completeUrl)
    .then((response) => response.json())
    .then((responseJson) => {
        setUrl(responseJson.websiteUrl)
        setFileName(responseJson.fileName)
        setFileContent(responseJson.content)
        let ImageUrl="http://localhost:8080/filename?File="+fileName
        setFileImage(ImageUrl)
        //alert(Image1)



    }
)

    
    

    return(
        <View style={styles.backColor}>
        
        <Text style={styles.ImageText}>{fileName}</Text>
        {Image1?
        <TouchableOpacity 
         
        onPress={ () => this.Imagefunction(fileName)}
       
        
        >
        <Image source={{uri: Image1}} style={styles.ImageSize} />
        </TouchableOpacity>
        :null
        }
        <Text style={styles.ImageTextIcon}>
        {fileContent}
        </Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    backColor:{
        backgroundColor: "#9C9C9C",
        flex:1

    },
    ImageTextIcon:{
        fontSize:20,
        color:'black',
        //textStyle:'bold',
        fontWeight: "bold",
        
        textAlign:'center'
    
      },
    ImageSize:{
        marginLeft:10,
        width:400,
        height:200,
        marginTop:30,
        alignItems:'center'
    
      },
      ImageText:{
        fontSize:20,
        
        textAlign:'center'
    
      }
    
    
  });
export default ReasturantData