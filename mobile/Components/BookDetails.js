import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title , Paragraph} from "react-native-paper";
import StarRating from "react-native-star-rating-widget";

const {widht,height} = Dimensions.get("window")
const BookDetails = ({navigation, route}) => {
    
    return (<View style={style.main}>
        <ScrollView>
        <View style={style.bookImageView}>
        
        <Image elevation={100} style={style.img} source={require("../Images/book.png")}></Image>
        <Title style = {style.title}>
            Welcome Home: A home in your heart
        </Title>
    
        <Paragraph style = {style.author}> by Me</Paragraph>
        <View style= {style.bar}>
            <View style={style.ratingView}>
           
            <Text style = {style.rating1}>Rating</Text>
            <Text style = {style.rating}> 4</Text>
            </View>
            <View style={style.ratingView}>
            <Text style = {style.rating1}>Rating</Text>
            <Text style = {style.rating}> 4</Text>
            </View>
            <TouchableOpacity style={style.ratingView}>
                <Text style = {style.rating1}>Fav</Text>
            </TouchableOpacity>
            
            
        </View>
        <TouchableOpacity style= {style.button}>
                <Text style={style.buttonText}> Read Book</Text>
        </TouchableOpacity>
            
        </View>
        <View style = {style.bookDetailView}>
           
           <Title style= {style.detailTitle}> What's its about?</Title>
            <Paragraph style={style.detail}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Paragraph>
           
           
          
        </View>
        </ScrollView>
    </View>)

}

const style = StyleSheet.create({
    main:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black"
    },
    bookImageView: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: "#ebb82d",
        widht : widht,
        alignItems: 'center',
        justifyContent: "center",
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30
        
    },
    bookDetailView: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 15,

        

    },
    img:{
        
        width: 125,
        height: 200,
        borderRadius: 10,
        backgroundColor: "black",
        shadowColor: "black",
        marginTop : 50,
        
    },
    title: {
        color:  "white",
        marginTop: 20,
        fontSize: 22

    },
    author: {
        color: "white",
        fontWeight:"normal",
        marginTop: 12
    },
    bar:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50

    },
    rating1:{
        color: "white",
        fontWeight: "normal",
        fontSize: 17
    },
    rating: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22
    }, 
    ratingView:{
        marginHorizontal: 40,
        marginBottom: 20
    }, 
    button: {
        marginHorizontal: 10,
        zIndex: 2,
        top: 27,
        
    },
    buttonText: {
        color: "white",
        backgroundColor: "grey",
        paddingHorizontal: 50,
        paddingVertical : 15,
        borderRadius: 10,
        fontSize : 20
    },
    detailTitle: {
        fontSize : 25,
        marginBottom: 20,
        fontWeight: "bold",
        color: "white"

    }, 
    detail: {
        color: "grey"

    }


})


export default module = BookDetails;

