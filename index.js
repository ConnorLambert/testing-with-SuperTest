const fetch = require('node-fetch')
const fs = require('fs');
const request = require('supertest');
const express = require("express");
const port = 3001
const app = express();

app.listen(port, () => console.log("Express is listening!"))


// First GET Request/Test
app.get('/posts/1/comments', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(json => res.json(json))
    
})

request(app)
    .get('/posts/1/comments')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    });


// Second GET Request/Test
app.get('/albums/1/photos', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(response => response.json())
    .then(json => res.json(json))
})

request(app)
    .get('/albums/1/photos')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })


// Third GET Request/Test
app.get('/users/1/albums', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then(response => response.json())
    .then(json => res.json(json))
})

request(app)
    .get('/users/1/albums')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })


// Fourth GET Request/Test
app.get('/users/1/todos', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then(response => response.json())
    .then(json => res.json(json))
})

request(app)
    .get('/users/1/todos')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })


// Fifth GET Request/Test
app.get('/users/1/posts', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(response => response.json())
    .then(json => res.json(json))
})

request(app)
    .get('/users/1/posts')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })