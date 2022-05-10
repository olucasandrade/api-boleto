const getExpirationDateFromLine = require("./getExpirationDateFromLine");
const getValueFromLine = require("./getValueFromLine");
const hasOnlyNumbers = require("./hasOnlyNumbers");
const hasValidDigit = require("./hasValidDigit");
const hasValidLength = require("./hasValidLength");
const sumAllFigures = require("./getDVsByFigures");
const typeBoletoVerifier = require("./typeBoletoVerifier");

module.exports = {
    getValueFromLine,
    getExpirationDateFromLine,
    typeBoletoVerifier,
    hasOnlyNumbers,
    hasValidDigit,
    hasValidLength,
    sumAllFigures,
};
