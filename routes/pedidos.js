const express = require('express');
const { route } = require('../app');
const router = express.Router();


//Retorna todos os pedidos
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Restorna os pedidos'
    })
});

//Insere um pedidos
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    })
});

//Retorna os dados de um pedidos
router.get('/:id_pedidos', (req, res, next) =>{
    const id = req.params.id_pedidos
    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id: id
     });
});


//Exclui um pedidos
outer.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'O pedido foi excluido'
    })
});
module.exports = router;