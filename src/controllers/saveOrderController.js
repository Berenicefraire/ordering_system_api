const service = require('../services/assetService')
const db = require('./dbController');

const saveOrder = (req, res) => {
    db.query("SELECT * FROM colors", (err, rows, fields) => {
        console.log(rows)
    })
    res.json(req.body)
}; 

module.exports = {
    saveOrder
}
