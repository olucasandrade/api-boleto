const cutValue = (value) => {
    const newValue = String(value).split('').reduce((acc, e) => acc + Number(e), 0);
    if (Number(newValue) > 9) {
        cutValue(newValue);
    };
    return newValue;
};

module.exports = cutValue;