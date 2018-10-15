export default function getSearchParams(paramStr) {
    let keyVals = [];
    let params = paramStr.split(',');
    for (var i = 0; i < params.length; i++) {
        let curr = params[i].split(':');
        let newObj = {};
        newObj.key = curr[0];
        newObj.value = curr[1];
        keyVals.push(newObj);
    }
    return keyVals;
}