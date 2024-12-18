import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import productsData from '../data/products.json';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState(productsData);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>Quantidade: {item.quantity}</Text>
      <Button title="Deletar" onPress={() => deleteProduct(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Adicionar Produto" onPress={() => navigation.navigate('AddProduct')} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  productCard: { marginBottom: 15, padding: 10, borderWidth: 1, borderRadius: 5 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default HomeScreen;
