import React from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity,TouchableHighlight,Modal,Pressable } from 'react-native';
import { useImageStore } from "../../store/ImageStore";
import styles from '../Product/Product.styles';
import imageDetails from '../ProductDetails/ProductDetails';
import { useState } from 'react';


export default function image({ product, onCartClick }) {

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {

    return onCartClick(product);
  }

  const imageUrl = product.Poster;

  let modal;
  //console.log(imageUrl);

  const test = () => {
    console.log("testttttttttttttttttttttttttttttt");
  }

  const showModal = () => {
    console.log("here");

    setModalVisible(true);
  }



  if(modalVisible){
    modal = 
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              <Image
                style={styles.imageModal}
                source={{
                  uri: imageUrl,
                }}
                onPress={test}
              />            
            </Text>
            <Text> Titre : {product.Title}</Text>
            <Text> Année : {product.Year}</Text>
            <Text> Type : {product.Type}</Text>

            <View style={styles.buttonModal}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Fermer</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleAddToCart}>
                <Text style={styles.textStyle}>Ajouter au panier</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  }

  return (

    <View style={styles.contener}>
      {modal}
        <TouchableHighlight onPress={showModal}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
            onPress={test}
          />
        </TouchableHighlight>
            
        <Text style={styles.text} >{product.Title}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text>Ajouter au panier</Text>
        </TouchableOpacity>


    
    </View>



  )
}
