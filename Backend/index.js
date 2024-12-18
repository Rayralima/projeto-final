const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize'); // Importa o Sequelize

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados
const sequelize = new Sequelize('banco_estoque', 'usuario', 'senha', {
  host: 'localhost', // ou '127.0.0.1'
  dialect: 'sqlite', // ou 'mysql', 'postgres', etc.
  storage: './database.sqlite', // Para SQLite
});

// Modelo de Produto
const Product = sequelize.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  photo: {
    type: Sequelize.STRING, // URL da foto ou base64
  },
});

// Rotas de produtos
app.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

app.post('/products', async (req, res) => {
  try {
    const { name, description, quantity, photo } = req.body;
    const product = await Product.create({ name, description, quantity, photo });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, quantity, photo } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await product.update({ name, description, quantity, photo });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// Sincronizar banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});

