const express = require('express')

const server = express()

server.get('/', (req, res) => {
    let welcome = "Welcome user to Andres PS API"
    res.send(welcome)
}) 
server.get('/post', (req, res) => {
    data = res.sendFile('./static/books.json', {
        root: __dirname
    })
}) 
server.post('/post/:Book', (req, res) => {
    let titulo = 'la gran noticia del año'
    res.send('deseas crear un post titulado :' + req.params)
}) 
server.get('/user', (req, res) => {
      
    data = res.sendFile('./static/index.json', {
        root: __dirname
    })

}) 
server.get('/coment', (req, res) => {
    res.send('Hello World')
}) 
server.get('/post/all', (req, res) => {
    res.send('Hello World')
}) 
server.get('/user/all', (req, res) => {
    res.send('Hello World')
}) 
server.get('/coment/all', (req, res) => {
    res.send('Hello World')
}) 

server.listen(3000)