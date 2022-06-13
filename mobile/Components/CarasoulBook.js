 import React from "react";
 import { View , Image, StyleSheet} from "react-native";
 import { Title, Paragraph } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";


 const CBook = (props) => {
    return (
        <View style = {style.main}>
            <Image style = {style.Image} source={require("../Images/book.png")}></Image>
            <View style= {style.detContainer}>
                <Title style = {style.title}> {props.title}</Title>
                <Paragraph style = {style.Paragraph}> {props.disc}</Paragraph>
                <StarRating
                style = {style.rating}
                rating= {4}
                ></StarRating>
            </View>
        </View>
    );
 }

 const style = StyleSheet.create({
    main: {
        display:"flex",
        
        flexDirection: "column",
        backgroundColor : "black",
        alignItems: "center"



    },
    Image: {
        
      
    },
    detContainer: {
        flex: 2,
        paddingHorizontal: 20

    },
    title: {
        color: "black",
        fontSize: 20,
        fontWeight : "bold",
    },
    Paragraph: {
        color: "grey",
        fontSize: 15,
        fontWeight : "normal",
    },
    rating: {
        height: 20,
        width: 40

    }
 });

 export default module = CBook;