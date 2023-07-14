const express = require('express')
const app = new express();
const mysql = require('mysql');
const cors = require('cors')

// opçoes de conexao com Mysql
const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_tasks'
});


app.listen(3000, () => {
    console.log('Servidor Funcionando')
})

app.use(cors());
// routes
// -------------------
app.get('/', (req,res) =>{
    conection.query('SELECT COUNT(*) users FROM users', (err, results) =>{
        if(err){
            res.send('Mysql connection error.')
        } 
            res.send('Mysql connection OK.')
        
    })
    
})
// -----------------------------
app.get('/user/:id', (req,res) =>{
    conection.query('SELECT id, username, created_at FROM users WHERE id = ? ',[id = req.params.id ], (err, results) =>{
        if(err){
            res.send('Mysql connection error.')
        } 
            res.json(results)
        
    })
})

app.get('/user/:id/tasks', (req,res) =>{
    conection.query('SELECT * FROM tasks WHERE id_user = ? ',[id = req.params.id ], (err, results) =>{
        if(err){
            res.send('Mysql connection error.')
        } 
            res.json(results)
        
    })
})