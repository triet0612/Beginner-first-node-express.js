# Node.js

## <span style="color:yellow">1. Getting started</span>

* Modules & Exports:

```javascript
module.exports = {}; 
```
```javascript
const module = require('Path');
```

* Writing and Reading files:

```javascript
const fs = require('fs');
fs.readFile('./source/a.txt' ,(err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
```
```javascript
fs.writeFile('./source/b.txt', 'This is a file', () => {
    console.log('random stuff');
})
```
```javascript
// Makefolder
if (!fs.existsSync('./newfolder')){
    fs.mkdir('./newfolder', (err) => {
    if (err) {
        console.log(err);
    }
        console.log('folder created');
    })
}
// Remove folder
else{
    fs.rmdir('./newfolder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
```
```javascript
// Create file
if (!fs.existsSync('./source/c.txt')){
    fs.unlink('./source/c.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
```
```javascript
const readstream = fs.createReadStream('./source/a.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./source/b.txt',{encoding: 'utf8'});

// buffer stream
readstream.on('data', (chunk) => {
    console.log('~~~~~New Chunk~~~~~');
    console.log(chunk);
    writeStream.write('new_chunk\n')
    writeStream.write(chunk);
})

// piping
readstream.pipe(writeStream);
```

## <span style="color:yellow">2. Create Server</span>

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port');
});
```
The code above will create an http server that listen to requests on port 3000.

## <span style="color:yellow">3. NPM manager</span>

```bash
npm install -g nodemon && nodemon app
```
Install nodemon package and run app.js with nodemon to make changes to the server easier.

When use a use a project from other source, all the packages are listed in dependencies.

Run <code>npm install</code> to install all the packages in the dependencies.

## <span style="color:yellow">4. Express app</span>
Install express
```bash
npm install express
```

Create express app

```javascript
const express = require('express');

//create an express app
const app = express();

//listen on port 3000
app.listen(3000, "localhost");

//listen to get requests
app.get('/', (req, res) => {
    path = './source' + req.path;
    res.send();
});
```
```javascript
app.use((req, res, next) => {
    console.log(req.hostname, req.path, req.method);
    next();
})
```
.use() will be executed when the code reaches the .use() line.
When executed, use next() function to continue the execution of code after the .use

## <span style="color:yellow">5. NoSQL MongoDB - Mongoose</span>
NoSQL is non-relational database. This kind of database use collections, of document, each collections store 1 kind of document. 
The document store data similar to JSON documents

Mongoose is an ODM library - Object document mapping library

Schema defines the structure of a type of data/document
- Properties & Property types:

User Schema:
- name (string), required
- age (number)
- bio (string), required

Blog Schema:
- title(string), required
- snippet(string), required
- body(string), required

- Models allow us to communicate with database collections: get, save, delete...

## <span style="color:yellow">5. HTTP Requests</span>
- get: get resource
- post: create new data
- delete: delete data
- put: update data

get:
- localhost:3000/blogs
- localhost:3000/blogs/create

post:
- localhost:3000/blogs

delete, put, get:
- localhost:3000/blogs/:id

