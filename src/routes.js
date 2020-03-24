const express = require('express')
const routes = express.Router();


routes.post('/users',(req,res)=>{
    return res.json({
        evento:'Semanta OmniStack 11.0',
        aluno: 'Cassiano Ricardo Siduoski'
    })
});

module.exports = routes;

