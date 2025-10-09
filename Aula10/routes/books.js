const express = require('express'); // importa express
const Book = require('../models/Book') // importa o modelo Book
const router = express.Router(); // criamos o roteador

// POST
router.post('/', async (req, res) => {
    const { title, author, year } = req.body;   //extraimos os dados da requisição
    try {
        const newBook = new Book({ title, author, year });  // criamos e salvamos o livro
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error});
    }
});


// GET
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();    // buscamos todos os livros
        res.status(200).json(books);    //retornamos a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error});  // retornamos erro, se houver
    }
});


// PUT
router.put('/:id', async (req, res) =>{
    const { title, author, year } = req.body;   // extraimos os novos dados
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year }, {new: true});
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

// exportamos o roteador para ser usado no server.js
module.exports = router;