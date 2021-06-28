const express = require('express');
const { notes } = require('./db/db');
const fs = require('fs');
const path = require('path');

//Heroku port
const PORT = process.env.PORT || 3001;
const app = express();

// //parse incoming string/array data
// app.use(express.urlencoded({ extended: true }));
// //parse incoming JSON data
// app.use(express.json());
// app.use(express.static('public'));

//create new note

//validate notes

//get saved notes
app.get('/api/notes', (req, res) => {    
    res.json(notes);
});

//delete note


//get notes html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//get index html/wildcard
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});