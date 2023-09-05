const service = require('../services/assetService')

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
        },
        {
            id_color: 3,
            color_name: "Azul Jaspe"
        },
        {
            id_color: 4,
            color_name: "Café Jaspe"
        },
        {
            id_color: 5,
            color_name: "Morado Jaspe"
        },
        {
            id_color: 6,
            color_name: "Blanco"
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
        },
        {
            id_size: 3,
            sizes: "L"
        },
        {
            id_size: 4,
            sizes: "XL"
        },
        {
            id_size: 5,
            sizes: "2XL"
        }
    ]);
};
const getTextilType = (req, res) => {
    return res.json([
        {
            id_textil_type: 1,
            textil_type: "Sublimada"
        },
        {
            id_textil_type: 1,
            textil_type: "DTG"
        }
    ]);
};
    const getOrderPlace = (req, res) => {
        return res.json([
            {
                id_order_place: 1,
                order_place: "Y griega"
            },
            {
                id_order_place: 2,
                order_place: "Facebook"
            },
            {
                id_order_place: 3,
                order_place: "Whatsapp"
            },
            {
                id_order_place: 4,
                order_place: "Instagram"
            }
        ]);
}; 



module.exports = {
    getColors,
    getGenders,
    getSizes,
    getTextilType,
    getOrderPlace
}