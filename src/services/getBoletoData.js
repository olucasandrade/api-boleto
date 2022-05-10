const { getValueFromLine, getExpirationDateFromLine } = require("../utils");

const getBoletoData = (line, typeOfBoleto) => {
    const value = getValueFromLine(line, typeOfBoleto);
    const expirationDate = getExpirationDateFromLine(line, typeOfBoleto);
    return {
        amount: value,
        expirationDate,
        barCode: line,
    };
};

module.exports = getBoletoData;