const cutValue = require("./cutValue");

const getDVsByFigures = (field1, field2, field3) => {
    let index = 0;
    const sums = [field1, field2, field3].map(field => {
        console.log(field.slice(0, -1))
        const valuesToSum = field.slice(0, -1).split('');
        const total = valuesToSum.map(n => Number(n)).reduce((acc, value, i) => {
            const valueToMultiply = index % 2 === 0 ? 2 : 1;
            let valueMultiplied = value * valueToMultiply;
            if (valueMultiplied > 9) {
                valueMultiplied = cutValue(valueMultiplied);
            };
            index = index + 1;
            return acc + valueMultiplied;
        }, 0);
        return total;
    });
    console.log([])
    return sums.map(sum => {
        const mod = sum % 10;
        return 10 - mod;
    });
};

module.exports = getDVsByFigures;