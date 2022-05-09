const formatDate = require("./formatDate");

const getExpirationDateFromLine = (line, typeOfBoleto) => {
    const mapper = {
        BONDS: () => {
            const baseDate = new Date(1997, 10, 7);
            const chars = String(line).slice(-14, -10)
            const numberOfDays = Number(chars);
            const expirationDate = new Date(baseDate.getTime());
            expirationDate.setDate(expirationDate.getDate() + numberOfDays);
            return formatDate(expirationDate)
        },
        DEALERSHIP: () => {
            const chars = String(line).slice(24, 32);
            const year = String(chars).slice(4);
            if (!["19", "20"].includes(year.slice(2))) return ""; // Caso o ano da data de vencimento seja inválido, ou seja, a data não existe (em casos de concessionárias onde as datas não são obrigatórias)
            const month = Number(String(chars).slice(4, 6) + 1);
            const day = String(chars).slice(-2);
            const date = new Date(year, month, day);
            return formatDate(date);
        },
    }

    return mapper[typeOfBoleto]();
};

module.exports = getExpirationDateFromLine;