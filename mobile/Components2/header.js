import React from "react";
import { View , Image} from "react-native";
import { TextInput, Button } from "react-native-paper";
const Header =()=>{

    return ( 
        <>
            <Image style= {{width: 250, height: 60}} source={require("../Images/Logo.png")}></Image>
            <View style={{display:"flex", flexDirection:"row", paddingHorizontal: 20, paddingBottom: 20, }} >
                <TextInput 
                style={{flex: 5, height: 40, marginRight: 10, backgroundColor: "black"}}
                label="What would you like to read" 
                mode="outlined"  
                underlineColor="#fc5203" 
                activeUnderlineColor="#fc5203"  
                theme={{colors:{text: "white", placeholder: "white"}}}
                activeOutlineColor= "white"
                outlineColor= "white" ></TextInput>
                <Button icon="magnify" color="#ebb82d" mode="contained" labelStyle={{ color: "white", fontSize: 18 }} style={{textAlign: "center",height:40, marginTop: 10}}  
                
                > </Button>
            </View>
    </>
    );
}

export default module = Header;