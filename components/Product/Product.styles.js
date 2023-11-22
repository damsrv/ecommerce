import { StyleSheet, Text, View } from 'react-native';


export default StyleSheet.create({
    contener:{
        alignItems: 'center',
        width:350,
        backgroundColor:'white',
        marginVertical:20,
        borderRadius:20,
        
    },
    image: {
        marginTop:20,
        height: 350,
        width: 350,
    },
    imageModal:{
        height: 250,
        width: 250,
    },
    textModal:{
        alignItems:'flex-end'
    },
    text: {
        justifyContent : 'flex-start' ,
        color:'green',
        fontSize:20,
        margin:10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin:10,
        width: 350,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        height:'100%',
        width:'100%',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems:'flex-start'
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop:10,
        backgroundColor:'#DEDFCE',
        marginBottom:20,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      buttonModal:{
        flexDirection:'row',
        alignItems:'stretch',
        width:'80%',
        justifyContent:'space-around'
      }
    

  });
  