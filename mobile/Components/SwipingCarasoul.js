import React from "react";
import { View, Dimensions , Text, StyleSheet} from "react-native";
import Carousel from "react-native-snap-carousel"
import Book from "./Book";

import CarasoulBook from "./CarasoulBook";
import Swiper from "react-native-swiper";

const {width} = Dimensions.get("window")


const SwipingCarasoul = (props)=>{
    const data = props.data;

    return(
        <Swiper>
            {data.map(item=>  <CarasoulBook  ></CarasoulBook>)}
            
        </Swiper>
        
    );

}






export default module = SwipingCarasoul;