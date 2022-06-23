import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { Dimensions, Text, View } from "react-native";
import StarRating from "react-native-star-rating-widget";


const {width} = Dimensions.get("window")

const BookCard =(props)=>{
    const author = props.item.volumeInfo.authors;
    
    

    return(<Card style={{width:350, backgroundColor: "#121212", marginVertical: 3, marginHorizontal: 2, paddingVertical: 10, paddingHorizontal:10 }}>
        <Card.Cover source={{uri: props.item.volumeInfo.imageLinks.thumbnail}}></Card.Cover>
        <Card.Content style= {{marginTop: 20}}>
            
            <Title style= {{color: "white"}}>Title: <Text style= {{fontStyle: "italic", fontSize: 15, color: "grey"}}>{props.item.volumeInfo.title}</Text></Title>
            <Paragraph style= {{color: "#ebb82d"}}>Authors</Paragraph>
            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                <Text style={{color: "white"}} >{typeof props.item.volumeInfo.authors ==="undefined"? "no author info available": props.item.volumeInfo.authors}</Text>
         
            </View>
            <Text style={{color: "grey", fontSize: 15}}>Rating</Text>
            {typeof props.item.volumeInfo.averageRating==="undefined"? <Text style={{color:"grey", fontSize:10}}>Not Rated Yet</Text>: <StarRating
                starStyle= {{width: 12, marginLeft: 0, height: 4}}
                onChange={()=> console.log("askds")}
                disabled= {true}
                rating = {3}
            ></StarRating> }
            {/* <StarRating
                starStyle= {{width: 12, marginLeft: 0, height: 4}}
                onChange={()=> console.log("askds")}
                disabled= {true}
                rating = {3}
            ></StarRating> */}
            
        </Card.Content>
    </Card>);

}

export default module = BookCard ;