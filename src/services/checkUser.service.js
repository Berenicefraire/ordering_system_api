const checkUserRol = (user) => {
    // 1 = user
    // 5 = admin
    let checkUserRol = 1;
    if(user === 5) {
        checkUserRol = user;
    }
    return checkUserRol;
};


module.exports = {checkUserRol};