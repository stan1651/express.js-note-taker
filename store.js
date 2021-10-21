const { readFileSync } = require("fs");


class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {

    }
}

module.exports = new Store()