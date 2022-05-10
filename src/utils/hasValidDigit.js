const getDVsByFigures = require("./getDVsByFigures");

const hasValidDigit = (line, typeOfBoleto) => {
    const mapper = {
        BONDS: () => {
            const field1 = line.slice(0, 10);
            const field2 = line.slice(10, 21);
            const field3 = line.slice(21, 32);
            const fields = [field1, field2, field3];
            const DVs = getDVsByFigures(field1, field2, field3);
            return fields.every((field, index) => {
                const dv = field.slice(-1);
                return String(DVs[index]) === String(dv);
            });
        },
        DEALERSHIP: () => true,
    }
    return mapper[typeOfBoleto]();
};

module.exports = hasValidDigit;