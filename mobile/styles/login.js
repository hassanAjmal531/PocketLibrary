import {StyleSheet} from "react-native";
const style = StyleSheet.create({
    screen:{
      flex: 1,
      display:'flex',
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: "#000000"

  
    },
    img: {
      alignItems:'center',
      justifyContent:'center',
      marginTop: 20,
      marginBottom: 20,
      width: 250,
      height: 110,
      marginHorizontal: 50
      
      
    
      
    },
  text: {
    fontSize: 15,
    fontWeight:'bold',
    marginVertical: 5,
    backgroundColor: "#000000",
    borderRadius: 10
    

  },
  button:{
    
    marginTop: 10,
    marginHorizontal: 50,
    borderRadius: 10
    


    
  }, 
  buttonText: {
      height: 40,
    paddingVertical: 6,
    fontSize: 20,     
      
      textAlign: "center"




  },
  signupview:{
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: "row"
  },
  signup:{
    marginTop:2,
    color:"white",
    textDecorationLine:'underline',
    fontSize: 17
  },
  Welcome:{
    fontSize: 40,
    alignContent: 'center',
    fontWeight:'bold'
    
  }

});

export default module = style;