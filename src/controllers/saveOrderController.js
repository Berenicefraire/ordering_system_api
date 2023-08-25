const service = require('../services/assetService')

const saveOrder = (req, res) => {
    res.json(req.body)
}; 

module.exports = {
    saveOrder
}
