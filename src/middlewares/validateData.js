const { typeBoletoVerifier, hasOnlyNumbers, hasValidLength, hasValidDigit } = require("../utils");

const validateData = (req, res, next) => {
    typeBoletoVerifier(req)
    const { typeOfBoleto, params } = req;
    const { line } = params;
    if (!hasOnlyNumbers(line)) res.status(400).json({ message: "A linha digitável deve possuir apenas números." });
    if (!hasValidLength(line)) res.status(400).json({ message: "A linha digitável deve conter 47 ou 48 dígitos." });
    if (!hasValidDigit(line, typeOfBoleto)) res.status(400).json({ message: "Dígito verificador inválido!" });
    next();
};

module.exports = validateData;
