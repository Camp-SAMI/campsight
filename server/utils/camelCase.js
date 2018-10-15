function camelCase(strValue) {
    return strValue[0].toLowerCase() + strValue.slice(1);
}

module.exports = camelCase;