const { getValueFromLine, getExpirationDateFromLine } = require("../utils");

const getBoletoData = (line, typeOfBoleto) => {
    console.log(typeOfBoleto)
    const value = getValueFromLine(line, typeOfBoleto);
    const expirationDate = getExpirationDateFromLine(line, typeOfBoleto);
    return {
        value,
        expirationDate,
        barCode: line,
    };
};

module.exports = getBoletoData;