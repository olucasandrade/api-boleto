const getValueFromLine = (line, typeOfBoleto) => {
    const mapper = {
        BONDS: String(line).slice(-10),
        DEALERSHIP: String(line).slice(5, 15),
    };
    const chars = mapper[typeOfBoleto];
    const value = Number(chars) / 100;
    return String(value);
};

module.exports = getValueFromLine;