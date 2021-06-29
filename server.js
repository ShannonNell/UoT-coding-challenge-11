const express = require('express');
let { notes } = require('./db/db.json');
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

//create new note and add to json file
function createNewNote(body) {
    // console.log(body);
    const note = body;
    let currentNotes = fs.readFileSync('./db/db.json');
        currentNotes = JSON.parse(currentNotes);
        console.log(currentNotes);

    currentNotes.push(note);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(currentNotes, null, 2)
    );
    // return finished code to post route for response
    return note;
}

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


//get saved notes
app.get('/api/notes', (req, res) => { 
    let results = fs.readFileSync('./db/db.json');
    results = JSON.parse(results);
    res.json(results);
});

//post notes with unique ID
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    
    //set id
    req.body.id = shortId.uuid();
    // console.log(req.body.id);
    
    //if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).sendStatus('The note is not properly formatted.');
    } else {
        //add note to json file
        const note = createNewNote(req.body);
        res.json(note);
    }
});

//delete note
// app.delete('/api/notes/:id', function (req, res) {
//     let noteId = req.params.id;
//     let newId = 0;

//     console.log(`Deleting note with ID ${noteId}`);
//     //filter data of current note, return current note ID when note = noteId
//     notes = notes.filter(currentNote => {
//         return currentNote.id != noteId;
//     });
//     //for current note, change note ID to string and add new Id
//     for (currentNote of notes) {
//         currentNote.id = newId.toString();
//         newId++;
//     }
//     //write to files with updated json notes
//     fs.writeFileSync('./db/db.json', JSON.stringify(notes));
//     res.json(notes);
// });

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