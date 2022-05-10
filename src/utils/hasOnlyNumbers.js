const hasOnlyNumbers = (line) => {
    return /^[0-9]+$/.test(line);
};

module.exports = hasOnlyNumbers;