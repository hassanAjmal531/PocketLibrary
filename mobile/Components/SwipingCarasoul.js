import React from "react";
import { View, Dimensions , Text, StyleSheet} from "react-native";
import Carousel from "react-native-snap-carousel"
import Book from "./Book";

const {width} = Dimensions.get("window")


const SwipingCarasoul = (props)=>{

    return(
        <Carousel
        layout="default"
        itemWidth={width-20}
        itemHeight={400}
        sliderWidth= {width}
        data={props.data}
        renderItem={({ item }) => <Book title= {item.title} disc = {item.disc}/>}
        autoPlay={true}
        scrollEnabled= {true}
        useScrollView= {true}
        onChange = {()=> console.log("hellooooo")}
        style = {props.styles}
/>
    );

}





export default module = SwipingCarasoul;