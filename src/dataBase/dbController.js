const DB = require("./db.json");
const { saveToDatabase } = require('./utils')

const getAllAssets = () => {
    return DB.assets
};

const creatNewAsset = (creatNewAsset) => {
    const isAlReadyAdded = DB.assets.findIndex((asset) => asset.name === creatNewAsset.name);
    if(isAlReadyAdded) {
        return;
    }
    DB.assets.push(creatNewAsset);
    saveToDatabase(DB);
    return creatNewAsset;
};


module.exports = {getAllAssets, creatNewAsset};