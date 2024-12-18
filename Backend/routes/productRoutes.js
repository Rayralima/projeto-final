const express = require('express');
const router = express.Router();
const db = require('../models');

// Listar todos os produtos
router.get('/', async (req, res) => {
  const products = await db.Product.findAll();
  res.json(products);
});

// Adicionar um produto
router.post('/', async (req, res) => {
  const { name, description, quantity, photo } = req.body;
  const product = await db.Product.create({ name, description, quantity, photo });
  res.json(product);
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, photo } = req.body;
  await db.Product.update({ name, description, quantity, photo }, { where: { id } });
  res.json({ message: 'Produto atualizado com sucesso' });
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.Product.destroy({ where: { id } });
  res.json({ message: 'Produto deletado com sucesso' });
});

module.exports = router;
