import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { Dimensions, Text, View } from "react-native";
import StarRating from "react-native-star-rating-widget";

const {width} = Dimensions.get("window")

const BookCard =(props)=>{

    return(<Card style={{width:350, backgroundColor: "#121212", marginVertical: 3, marginHorizontal: 2, paddingVertical: 10, paddingHorizontal:10 }}>
        <Card.Cover source={{uri: props.item.volumeInfo.imageLinks.thumbnail}}></Card.Cover>
        <Card.Content style= {{marginTop: 20}}>
            
            <Title style= {{color: "white"}}>Title: <Text style= {{fontStyle: "italic", fontSize: 15, color: "grey"}}>{props.item.volumeInfo.title}</Text></Title>
            <Paragraph style= {{color: "#ebb82d"}}>Authors</Paragraph>
            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                <Text >{props.item.volumeInfo.authors!=="undefined"?props.item.volumeInfo.authors: "author not available"}</Text>
                <View>
            <StarRating
                onChange={()=> console.log("askds")}
                disabled= {true}
                rating = {3}
                ></StarRating>

            </View>
            </View>
            
        </Card.Content>
    </Card>);

}

export default module = BookCard ;