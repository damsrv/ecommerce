import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ScrollView, TouchableOpacity } from 'react-native';
import { useImageStore } from "../../store/ImageStore";
import styles from '../Cart/Cart.styles';
import Product from '../Product/Product';
import CartItem from '../CartItem/CartItem';
import { useEffect } from 'react';

// On passe navigation au composant pour qu'il puisse naviguer vers la page Pay en mode stack.
export default function Cart({navigation}) {

  const { cart, setCart } = useImageStore();

  return (

  <ScrollView style={{backgroundColor:'#DEDFCE'}}>
    <View>
      {
        cart.map((product)=>{
          return (
            <View key={product["imdbID"]} style={styles.contener}>
              {product.Quantity ? <CartItem product={product} ></CartItem> : null}
            </View>
            
          )
        })
      }
      
      <TouchableOpacity
        onPress={()=>navigation.navigate("Pay",{msg:"From Screen 1"})} // On utilise navigation pour naviguer vers l'écran Pay
        style={styles.button}
      >
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>


  )
}
