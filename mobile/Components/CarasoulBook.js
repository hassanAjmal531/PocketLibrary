 import React from "react";
 import { View , Image, StyleSheet} from "react-native";
 import { Title, Paragraph } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";


 const CBook = (props) => {
    return (
        <View>
            <Image source={require("../Images/book.png")}></Image>
            <View>
                <Title> {props.title}</Title>
                <Paragraph> {props.disc}</Paragraph>
                <StarRatings
                rating= {4}
                ></StarRatings>
            </View>
        </View>
    );
 }

 const style = StyleSheet.create({
    main: {
        display:"flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor : "white"

    },
    Image: {
        flex: 1,
    },
    detContainer: {
        flex: 1,
        paddingHorizontal: 20

    },
    title: {
        color: "black",
        font: 20,
        fontWeight : "bold",
    },
    Paragraph: {
        color: "grey",
        font: 15,
        fontWeight : "normal",
    },
    rating: {
        height: 20,
        width: 40

    }
 });

 export default module = CBook;