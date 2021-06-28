const express = require('express');
const { notes } = require('./db/db');
const fs = require('fs');
const path = require('path');

//Heroku port
const PORT = process.env.PORT || 3001;
const app = express();

// Used to accept incoming data so we can use it (insomnia tested)
//parse incoming string/array data 
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
// app.use(express.static('public'));

//create new note and add to json file
function createNewNote(body, notesArr) {
    console.log(body);
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    // return finished code to post route for response
    return note;
}
//validate notes


//delete note

//get saved notes
app.get('/api/notes', (req, res) => { 
    res.json(notes);
});

//post notes with unique ID
app.post('/api/notes', (req, res) => {
    console.log(req.body);

    //set id
    // req.body.id = 

    //add note to json file
    const savedNote = createNewNote(req.body, notes);
    res.json(savedNote);
});

//HTTP ROUTES
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