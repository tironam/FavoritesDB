const db = require('../db')

module.exports = {
    getAll (table, cb) {
        db.query(`SELECT * FROM ${table}`, (err, data))
    }
}