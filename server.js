const express = require('express');
const app = express();
// const PORT = process.env.PORT || 3001;

//link routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// //parse incoming string/array data
// app.use(express.urlencoded({ extended: true }));
// //parse incoming JSON data
// app.use(express.json());
// app.use(express.static('public'));

// // use api routes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


const { notes } = require('./db/db');


//get saved notes
app.get('/api/notes', (req, res) => {    
    res.json(notes);
});



//listen for requests
app.listen(3001, () => {
    console.log(`Listening on port 3001`);
});