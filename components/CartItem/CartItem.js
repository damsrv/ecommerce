import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight,ScrollView,Image, TouchableOpacity } from 'react-native';
import { useImageStore } from "../../store/ImageStore";
import styles from './CartItem.styles';


export default function CartItem({ product }) {

  const { cart, setCart, decrementCartItemQuantity, incrementCartItemQuantity  } = useImageStore();


  return (
    <View style={styles.contener}>
      <View style={styles.cartLine}>
        <Image
          style={styles.image}
          source={{
            uri: product.Poster,
          }}
        />
        <View style={styles.cartDescription}>
          <Text> {product.Title} </Text>
          <Text> Quantité : {product.Quantity} </Text>
          <View style={styles.buttonOpacityContainer}>
            <TouchableOpacity style={styles.buttonOpacity} onPress={() => incrementCartItemQuantity(product.imdbID)}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOpacity} onPress={() => decrementCartItemQuantity(product.imdbID)}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
