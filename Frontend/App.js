import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation'; // Importa o arquivo de navegação

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;