import React, { useEffect } from 'react';
import searchImages from '../../api';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useImageStore } from "../../store/ImageStore";
import styles from '../ProductList/ProductList.style';
import Product from '../Product/Product';


export default function ProductList() {

  const { images, setImages } = useImageStore();

  const { cart, setCart, incrementCartItemQuantity } = useImageStore();

  useEffect(() => {
    console.log(cart, 'cart 2');
  });

  const addToCart = (product) => {
    
      // Si contient le produit
    if (cart.some(item => item.imdbID === product.imdbID)) {

      // On ajoute une propriété qu'on incrémente
      console.log("ICICCICICIICICICICKNVKJNVJKDN?");
      
      // On trouve l'object déja existant
      var object = cart.find((item) => {
        return item.imdbID === product.imdbID;
      });

      console.log(object);

      incrementCartItemQuantity(object.imdbID);

      console.log(cart, "my cart");
      
    }else {
      console.log(cart);

      // On ajoute une propriété quantié au panier
      product.Quantity = 1;

      console.log(product);

      setCart(product);

      console.log(cart);


    }
    
  }

  const getImages = async (term) => {
  
    const result = await searchImages("thriller");
  
    console.log(result["Search"]); 

    setImages(result["Search"]);
    
  
  };
  
  // Lancement du projet images est vide donc passe par ici et rempli images avec un appel à une API.
  if (images.length === 0) {
  
      getImages("thriller");
  
  }

  return (
    <ScrollView style={styles.contener}>
      <View style={styles.productListContener}>
        {
          images.map((product)=>{
            return (
              <Product key={product["imdbID"]} product={product} onCartClick={addToCart} style={styles.productList}></Product>
            )
          })
        }
      </View>
    </ScrollView>

  )
}
