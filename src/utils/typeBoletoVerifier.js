const typeBoletoVerifier = (req) => {
    const { line } = req.params;
    const values = {
        47: "BONDS",
        48: "DEALERSHIP",
    };
    req.typeOfBoleto = values[line.length];
};

module.exports = typeBoletoVerifier;