const fs = require("fs");
const util = require ("util");


class Store {
    read() {
        return readFileASync('db/db.json', 'utf8');
    }
    write(note) {
        return writeFileSync('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        console.log("get notes")
        return this.read().then( notes => {
            console.log(notes)
            let notesArray;
            try {
                notesArray = [].concat(JSON.parse(notes));
            }
            catch (err) {
                notesArray = [];
            }
            return notesArray;
        })
    }
   
    addNotes(note) {
        console.log("add notes");
       const {title, text} = note;
        const newNote = { title, text, id: ++this.idDum }
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updateNotes => this.write(updateNotes))
        .then(() => new Note)
    }
};

module.exports = new Store()