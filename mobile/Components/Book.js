import React from "react";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import {Dimensions,Image,View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground} from "react-native"
import StarRating from "react-native-star-rating-widget"
const {width} = Dimensions.get("window")
const Book = (props)=>{
    return(
      <TouchableOpacity onPress={()=> props.nav.navigate("det", {book: props.item})} >
      
      <View style= {{width: 100, backgroundColor:"white", marginHorizontal:7, flex: 1, borderRadius: 20}}>
        
        <ImageBackground style= {{flex:1}} source={{uri: props.item.volumeInfo.imageLinks.thumbnail}}>
        
          
        </ImageBackground>
      {/* <TouchableOpacity style= {{flex:1}}>
        
        <View  style={{ paddingHorizontal: 10, flex:1, flexDirection:"row"}}>
          <Image style={{width: 78, height: 100, marginTop:23, flex: 1}} source={require("../Images/book.png")}></Image>
          <View style= {{backgroundColor: "orange", flex: 2, flexDirection:"column"}}>
            <Title style={{fontSize: 15, marginTop: 12, marginLeft:10, position: "absolute"}}>Title:</Title>
            
          </View>
        </View>
       
      </TouchableOpacity> */}
      </View>
      </TouchableOpacity>
      // <TouchableOpacity onPress={()=> props.nav.navigate("det", {book: props.item})}>
      //   <View style = {{backgroundColor: "#191a19", height: 220, width: width, flex: 1, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 20, marginHorizontal: 10, marginTop: 10,borderBottomWidth: 1, borderBottomColor: "white"}}>
      //   <Image style={{width : 120, height: 150,marginTop: 10, borderRadius: 10 }} source={require("../Images/book.png")}></Image>
      //   <View style= {{ paddingHorizontal: 20, paddingVertical: 20}}>
      //     <Title style= {{color: "grey",fontSize: 18 }}>{props.title}</Title>
      //     <Paragraph style= {{fontSize: 13, color : "grey"}}> {props.disc}</Paragraph>

      //   </View>
      //   </View>
      // </TouchableOpacity>
      
        
        
    );
}

const style = StyleSheet.create({
  book:{

    
    marginVertical: 10,
    marginHorizontal: 8,
    backgroundColor:"white",
    
    flex: 1

  },
  content: {
    flex: 1,
    flexDirection: "column"
  
  }
});

export default module = Book;
