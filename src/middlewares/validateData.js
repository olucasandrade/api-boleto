const { typeBoletoVerifier } = require("../utils");

const validateData = (req, res, next) => {
    typeBoletoVerifier(req)
    next();
};

module.exports = validateData;
