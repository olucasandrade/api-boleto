const formatDate = (date) => {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

module.exports = formatDate;