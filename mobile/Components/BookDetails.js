import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Linking, Alert, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title , Paragraph, Button} from "react-native-paper";
import { doc, updateDoc, arrayUnion, arrayRemove , getDoc} from "firebase/firestore";
import auth, {db} from "../backend/FireBase/firbaseConfig" 
import StarRating from "react-native-star-rating-widget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from "@firebase/util";

const {widht,height} = Dimensions.get("window")
const BookDetails = ({navigation, route}) => {
   const [fav, setFav] = useState(false);
    const book = route.params.book;
    const title = book.volumeInfo.title;
      console.log(title.length);

      

      const openBook = async(url)=>{
        // await Linking.openURL(url).then(data=> console.log(data)).catch(e=> console.log(e))
        AsyncStorage.clear();
        AsyncStorage.getItem(book.id).then(res=>console.log(res))
        
      }

      const AddToFavourite = async  (book)=>{
        setFav(true)
        
        var data;
        AsyncStorage.setItem(book.id, JSON.stringify(book))
        // AsyncStorage.getItem(book.id).then(res=>console.log(res))
    //     AsyncStorage.getAllKeys().then(keys=>{
    //         console.log(keys)
    //         AsyncStorage.multiGet(keys).then(data=>{
    //             data.map((res, i, data)=>{
    //                 // console.log(JSON.parse(data[i][1]))
                   
    //                 console.log(JSON.parse(data[i][1]).volumeInfo.title)
    //             })
    //         })
    //   });
       
        // 
        
    
        
        // AsyncStorage.getItem('data').then(e=> {
        //    data = e;
        //    console.log(data);
        //    AsyncStorage.setItem(book.id,data+"+"+book.id ).then(()=> {
        //     console.log("in add to fav");
            
        // });
        // }).catch(e=>console.log(e))
        
        
       
        
        
       


       

      }

      const removeFavourite = async  (book)=>{
        
        
        setFav(false);
        AsyncStorage.removeItem(book.id);
        // AsyncStorage.getItem(book.id).then(res=>console.log(res))
        // AsyncStorage.getItem('data').then(e=> {
        //     console.log(e)
        //     setFav(false)
           
        //     let id = e.split("+")
        //     id = id.filter(item=> item !==book.id).join("+")
        //     AsyncStorage.setItem("data",id ).then(()=> {
        //         console.log("in remove");
                
        //     });

        //     console.log(id)
        // }).catch(e=>console.log(e))
        



      }

      
    return (<View style={style.main}>
        <ScrollView>
        <View style={style.bookImageView}>
        
        <Image elevation={100} style={style.img} source={{uri: book.volumeInfo.imageLinks.thumbnail}}></Image>
        {title.length >=30 ? <Title style = {style.title}>
            {title}
            </Title>: <Title style = {style.title2}>
                {title}
            
            </Title>} 
    
        <Paragraph style = {style.author}> {book.volumeInfo.authors}</Paragraph>
        <View style= {style.bar}>
            {/* <View style={style.ratingView}>
           
            <Text style = {style.rating1}>Rating</Text>
            <Text style = {style.rating}> {typeof book.volumeInfo.averageRating ==="undefined"? "nom rating Available": book.volumeInfo.averageRating}</Text>
            </View> */}
            <View style={style.ratingView}>
            <Text style = {style.rating1}>Language</Text>
            <Text style = {style.rating}> English</Text>
            </View>

            
            <Button labelStyle={{color: "red", fontSize: 15}} icon="heart" onPress={()=> {
                if(fav === false){
                   AddToFavourite(book)
                    // removeFavourite(book)

                }
                else{
                    removeFavourite(book)
                }
            }} style={style.ratingView}>
              <Text style={{color: "white"}}>add to fav </Text>
            </Button>
            
            
        </View>
        <Button 
        color="grey"
        mode="contained"
        labelStyle={{borderRadius: 13, fontSize: 15, color: "white"}}
        style= {style.button}
        onPress= {()=> openBook(book.volumeInfo.previewLink)}  >
                Read Book
        </Button>
            
        </View>
        <View style = {style.bookDetailView}>
           
           <Title style= {style.detailTitle}> What's its about?</Title>
            <Paragraph style={style.detail}>{typeof book.volumeInfo.description === "undefined"? "No description of the book is available":book.volumeInfo.description } </Paragraph>
           
           
          
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
        fontSize: 18

    },
    title2: {
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
        fontSize: 15
    },
    rating: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22
    }, 
    ratingView:{
        marginHorizontal: 40,
        marginBottom: 20,
        alignItems: "center"
    }, 
    button: {
        marginHorizontal: 10,
        zIndex: 2,
        top: 27,
        borderRadius: 10
        
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

