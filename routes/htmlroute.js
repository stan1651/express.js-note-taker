 //html routes and api routes
    // html routes - are the physical pages of your sites 
        // similar to linking multiple .html files to one html file (static path)
    // api routes = database or an actual library 

const router = require('express').Router();
const path = require('path');

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;