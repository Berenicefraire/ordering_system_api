const service = require('../services/assetService')
const userService = require('../services/checkUser.service')

// https://developer.mozilla.org/es/docs/Web/HTTP/Status

const getColors = (req, res) => {
    
    // Logica
    // let userRol = userService.checkUserRol(2);
    return res.status(200).json([
        {
            id_color: 1,
            color_name: "Gris Jaspe"
        },
        {
            id_color: 2,
            color_name: "Verde Jaspe"
        }        
    ]);
};
const getGenders = (req, res) => {
    return res.json([
        {
            id_gender: 1,
            gender: "Dama"
        },
        {
            id_gender: 1,
            gender: "Caballero"
        }
    ]);
}; 
const getSizes = (req, res) => {
    return res.json([
        {
            id_size: 1,
            sizes: "CH"
        },
        {
            id_size: 2,
            sizes: "M"
        }
    ]);
};
const getTextilType = (req, res) => {
    return res.json([
        {
            id_textil_type: 1,
            textil_type: "Subli"
        },
        {
            id_textil_type: 1,
            textil_type: "DTG"
        }
    ]);
}; 



module.exports = {
    getColors,
    getGenders,
    getSizes,
    getTextilType
}