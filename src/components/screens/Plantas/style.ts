import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    fundo: {
       
        backgroundColor: colors.gray[700],
        flex: 1, 
        justifyContent: 'center',
    },

  
    container:{
        flex: 1,       
        alignItems: 'center',
        gap: 33,
        padding: 33,
    },
   input:{
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color:'222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
   },
   header: {
    flexDirection: "row",
   width: "100%",
   justifyContent: "flex-start",
   color: '#fff',
   },

    btnSubmit:{
     backgroundColor: colors.gray[300],
     width: '90%',
     height: 45,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 7,
    },
    submitText:{
        color: '#fff',
        fontSize: 18,
    },
    btnRegister:{
        marginTop: 10,
    },
    registerText:{
        color: '#fff',
    },
})