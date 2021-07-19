const express = require('express');
const { route } = require('../app');
const router = express.Router();


//Retorna todos os produtos
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    })
});

//Insere um Produto
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
    })
});

//Retorna os dados de um Produto
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Voce descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID',
        });
    }
});

//Altera um produto
outer.patch('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o Patch dentro da rota de produtos'
    })
});

//Exclui um produto
outer.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o Delete dentro da rota de produtos'
    })
});
module.exports = router;