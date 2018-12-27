
import { StyleSheet } from 'react-native'


export default StyleSheet.create ({
    textHeader : {
        alignSelf: 'center', 
        fontSize: 16, 
        fontWeight:"500", 
        marginEnd: 5, 
        color:'red' 
    },
    
    iconTrophy : {
        borderRadius: 10,
        borderWidth: 3, 
        alignSelf:'flex-end', 
        margin: 5, 
        borderColor: 'orange'
    
    },

    iconPeople : {
        borderRadius: 10,
        borderWidth: 3, 
        alignSelf:'flex-end', 
        margin: 5, 
        borderColor: '#95a5a6'
       
    },
    imageHeader : {
        width: 30, 
        height: 30, 
        margin: 3 
    },

    viewCombos : {
        alignItems:"center", 
        borderRadius: 5,
        borderWidth: 3,
        alignContent:'flex-end',
        margin: 5, 
        borderColor:'#95a5a6', 
        marginHorizontal: 130,
        marginTop: -5, 
        backgroundColor: '#ffffff',  
    },

    numberCombos : {
        fontWeight:"500", 
        fontSize:40 
    },

    viewBody : {
        alignItems:"center", 
        justifyContent:'center', 
        marginBottom:-100
    }, 

    viewImageBody : {
        height:290, 
        width:200, 
    },

    viewButton : {
        flexDirection:'row', 
        justifyContent:'center', 
        marginVertical:10
    },

    btnLeftRight : {
        borderWidth: 2,
        borderRadius:50, 
        padding:10, 
        marginHorizontal: 50,
        backgroundColor : '#039be5',
        borderColor : '#fafafa'
    },

    btnCenter : {
        borderWidth: 2, 
        borderRadius:50, 
        padding:10, 
        marginHorizontal: 5,
        backgroundColor : '#039be5',
        borderColor : '#fafafa' 
    }
})