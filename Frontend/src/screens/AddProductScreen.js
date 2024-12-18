import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddProductScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const addProduct = () => {
    // Aqui você pode salvar o produto em um backend ou no estado.
    alert(`Produto ${name} adicionado!`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Salvar Produto" onPress={addProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
});

export default AddProductScreen;
