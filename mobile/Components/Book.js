import React from "react";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import {View, Text, StyleSheet} from "react-native"
import StarRating from "react-native-star-rating-widget"

const Book = (props)=>{
    return(
        <Card>
       
        
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.disc}</Paragraph>
          <StarRating 
          rating={4}
          ></StarRating>
        </Card.Content>
        <Card.Actions>
          
        </Card.Actions>
      </Card>
    );
}

export default module = Book;
