const { getBoletoData } = require("../services");

const getData = (req, res) => {
    const { typeOfBoleto, params } = req;
    const { line } = params;
    const result = getBoletoData(line, typeOfBoleto);
    return res.json(result);
};

module.exports = getData;