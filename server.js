const express = require('express');
const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const shortId = require('short-uuid');

//Heroku port
const PORT = process.env.PORT || 3001;
const app = express();

// Used to accept incoming data so we can use it (insomnia tested)
//parse incoming string/array data 
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


//get saved notes
app.get('/api/notes', (req, res) => { 
    let results = notes;
    res.json(results);
});

//post notes with unique ID
app.post('/api/notes', (req, res) => {
    // console.log(req.body);
    
    //set id
    req.body.id = shortId.uuid();
    // console.log(req.body.id);
    
    //if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).sendStatus('The note is not properly formatted.');
    } else {
        //add note to json file
        const note = req.body;
        notes.push(note);
        res.json(note);
    }
});

//validate notes
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !=='string') {
        return false;
    }
    return true;
};

// delete note
app.delete('/api/notes/:id', (req, res) => {
    //use query params to find id of note to delete
    const deleteNote = notes.findIndex((note) => note.id === req.params.id);

    //splice the note from array
    notes.splice(deleteNote, 1);

    //fs to update array after deleted
    fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2), function(err) {
        if (err) throw err;
    });
    res.json('The note has been deleted.');
    console.log('The note has been deleted.');
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