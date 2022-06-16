import React, {useState, useEffect} from "react";
import { Button, Card , Paragraph, Title } from "react-native-paper";
import {Image,Dimensions,View ,Text, ScrollView, StyleSheet,TextInput,  Alert} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import axios from "axios";
import Book from "./Book";
import { SafeAreaView } from "react-native-safe-area-context";
import Fav from "./favourite"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { async } from "@firebase/util";
import { configureProps } from "react-native-reanimated/lib/reanimated2/core";
const {width} = Dimensions.get("window");

const tab = createBottomTabNavigator();
const component = ({navigation})=>{

    const [data, setData] = useState([]);
    const [query, setquery] = useState("");
    const [pageButton, setPageButton] = useState(0)
    
    const paginationIndex = 0;
    var intialtquery = `https://www.googleapis.com/books/v1/volumes?q=flower&projection=lite&key=AIzaSyAam7TX5fc5V0VCHR84AgJ-ZF1hzqtWBZM&maxResults=40&filter=free-ebooks&startIndex=${paginationIndex}`;
    var searchQuery = `https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&key=AIzaSyAam7TX5fc5V0VCHR84AgJ-ZF1hzqtWBZM&maxResults=40&filter=free-ebooks&startIndex=${paginationIndex}`;

    

    const search =async (query)=> {
        
            
        const data=  await axios.get(searchQuery)
      setData(data.data.items)


    }

    useEffect(async ()=>{
    const data=  await axios.get(intialtquery)
      setData(data.data.items)
      
     
    }, [])

   
    return (<SafeAreaView style={style.main}>
        <View style= {style.container}>
            <Title style= {style. Maintitle}> Pocket Library</Title>
            <View style= {style.searchBar}>
                        
                <TextInput 
                style= {style.search} 
                placeholder= "What would you like to read?" 
                placeholderTextColor="#adacaa" 
                onChangeText={(text)=>setquery(text)}></TextInput>
                <Button style={style.icon} icon="magnify" onPress={()=> search(query)}></Button>

            </View>
            <Title style= {style. Maintitle}> For You</Title>
          
        </View>
        <View>
        <ScrollView>
            <View style = {{flex: 1, backgroundColor : 'orange  '}}>
                {data.map((item)=> {
                    
                
               return <Book nav = {navigation} title= {item.volumeInfo.title} disc = {item.volumeInfo.authors} item= {item}   ></Book>})}
                
            </View>

        </ScrollView>
        </View>
        

        {/* <SafeAreaView >
            <ScrollView style={style.seealsoContainer}>
                <Text>Trending</Text>
                <SwipingCarasoul data= {data}/>
            
                
                <Text style={style.trendingTitle}> See Also</Text>
                <View style={style.trending}>
                    {data.map(item =>{ return <Book title= {item.title} disc = {item.disc}></Book>} )}
                    =
                </View>
            </ScrollView>
        </SafeAreaView> */}
    </SafeAreaView>
    )
}

const Home = ()=> {
    return (
        
      <tab.Navigator>
        <tab.Screen name="Home" component={component} />
        <tab.Screen name="Favourites" component={Fav} />
      </tab.Navigator>
    
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "black",
        display: "flex",
        width: width
    },
    container: {
        
        backgroundColor: "#ebb82d",
        width: width,
        height: 260,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
        
    },
    container2: {
        flex: 2,
        backgroundColor: "black",
        width: width
    },
    cContainer:{
        flex: 1,
        backgroundColor: "#ebb82d" 
    },
    searchBar: {
        
        width: width,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 2,
        marginBottom: 10

       

    },
    search: {
        flex: 4,
        borderColor: "#c29827",
        borderRadius: 10,
        borderWidth: 1,
        color:  "white",
        height: 50,
        marginTop: 10,
        marginHorizontal:5,
        backgroundColor: "#c29827"

    
       
    }
    ,
    icon:{
        color: "#ffffff"
    }
    ,
    Maintitle:{
        color : "white",
        textAlign : "center",
        
        fontSize: 30,
        paddingTop : 35,
        paddingBottom: 10
    },
    title: {
        color : "white",
        fontSize: 25
    },
    book: {
        backgroundColor: "black"
    }
    ,
    
    swipElement: {
        backgroundColor: "whites",
        
        width: width,
        height: 220,
        borderRadius: 10,
        

        
        
    }
    , Image: {
        width : width,
        height: 140

    }
    

});

export default module = Home;