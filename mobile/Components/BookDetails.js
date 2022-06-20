import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Linking, Alert, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title , Paragraph, Button} from "react-native-paper";
import { doc, updateDoc, arrayUnion, arrayRemove , getDoc} from "firebase/firestore";
import auth, {db} from "../backend/FireBase/firbaseConfig" 
import StarRating from "react-native-star-rating-widget";

const {widht,height} = Dimensions.get("window")
const BookDetails = ({navigation, route}) => {
   const [fav, setFav] = useState(false);
    const book = route.params.book;
      console.log(book.volumeInfo.previewLink);

      const openBook = async(url)=>{
        await Linking.openURL(url).then(data=> console.log(data)).catch(e=> console.log(e))
      }

      const AddToFavourite = async  (book)=>{
        
        
        
        const uid = auth.currentUser.uid;
        console.log(uid)
        const Doc = doc(db, "users", uid);
        updateDoc(Doc, {
            fav: arrayUnion(book.id)
        }).then(res=>{
            Alert.alert("book added to fav")
            setFav(true)
        })
        .catch(e=>console.log(e));

        
        // const data = await getDoc(Doc);


       

      }

      const removeFavourite = async  (book)=>{
        
        
        
        const uid = auth.currentUser.uid;
        console.log(uid)
        const Doc = doc(db, "users", uid);
        updateDoc(Doc, {
            fav: arrayRemove(book.id)
        }).then(res=>{
            Alert.alert("book removed from fav")
            setFav(false)
        })
        .catch(e=>console.log(e));

        
        // const data = await getDoc(Doc);



      }

      
    return (<View style={style.main}>
        <ScrollView>
        <View style={style.bookImageView}>
        
        <Image elevation={100} style={style.img} source={{uri: book.volumeInfo.imageLinks.thumbnail}}></Image>
        <Title style = {style.title}>
            {book.volumeInfo.title}
        </Title>
    
        <Paragraph style = {style.author}> {book.volumeInfo.authors}</Paragraph>
        <View style= {style.bar}>
            <View style={style.ratingView}>
           
            <Text style = {style.rating1}>Rating</Text>
            <Text style = {style.rating}> 4</Text>
            </View>
            <View style={style.ratingView}>
            <Text style = {style.rating1}>Rating</Text>
            <Text style = {style.rating}> 4</Text>
            </View>

            
            <Button icon="heart" onPress={()=> {
                if(fav === false){
                    AddToFavourite(book)

                }else{
                    removeFavourite(book)
                }
            }} style={style.ratingView}>
                <Text style = {style.rating1}></Text>
            </Button>
            
            
        </View>
        <Button style= {style.button}
        onPress= {()=> AddToFavourite(book)}  >
                <Text style={style.buttonText}> Read Book</Text>
        </Button>
            
        </View>
        <View style = {style.bookDetailView}>
           
           <Title style= {style.detailTitle}> What's its about?</Title>
            <Paragraph style={style.detail}>{book.volumeInfo.description} </Paragraph>
           
           
          
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
        fontSize: 15
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

