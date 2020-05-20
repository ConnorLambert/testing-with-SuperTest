const fetch = require('node-fetch')
const fs = require('fs');
const request = require('supertest');
const express = require("express");
const port = 3001
const app = express();

app.listen(port, () => console.log("Express is listening!"))


// First GET and POST Request/Test
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

app.post('/posts/1/comments', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: 55,
            id: 56,
            name: 'Vlad',
            email: "asdfjkl;@yahoo.gov",
            body: "asd;flkja;sdlfkja;dslkfj"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
})
    
request(app)
    .post('/posts/1/comments')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })


// Second GET and POST Request/Test
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

app.post('/albums/1/photos', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
        method: 'POST',
        body: JSON.stringify({
            albumId: 55,
            id: 56,
            title: 'Vlad',
            url: "fffffff.com",
            thumbnailUrl: "anImage"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })

request(app)
.post('/albums/1/photos')
.expect(200)
.expect('Content-Type', 'application/json; charset=utf-8')
.end(function(err, res) {
    if (err) throw err;
})


// Third GET and POST Request/Test
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

app.post('/users/1/albums', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums', {
        method: 'POST',
        body: JSON.stringify({
            userId: 12,
            id: 15,
            title: "BARgalargh"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })

request(app)
.post('/users/1/albums')
.expect(200)
.expect('Content-Type', 'application/json; charset=utf-8')
.end(function(err, res) {
    if (err) throw err;
})


// Fourth GET and POST Request/Test
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

app.post('/users/1/todos', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: 12,
            id: 15,
            title: "BARgalargh",
            completed: false
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })

request(app)
.post('/users/1/todos')
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

app.post('/users/1/posts', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId: 12,
            id: 15,
            title: "BARgalargh",
            body: "The body of some thing."
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })

request(app)
    .post('/users/1/posts')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })


