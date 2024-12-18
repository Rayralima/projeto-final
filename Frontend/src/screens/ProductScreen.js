import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.100:3000/products') // Altere pelo IP do seu backend
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Cadastrados</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Quantidade: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductScreen;
