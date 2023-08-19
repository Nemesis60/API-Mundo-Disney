const bcrypt = require("bcrypt");

const salt = 10;

const encrypt = async (text) => {
    hash = await bcrypt.hash(text, salt);
    return hash;
}

const compare = async (text, hashedPassword) => {
    return await bcrypt.compare(text, hashedPassword);
}

module.exports = {
    encrypt,
    compare
}