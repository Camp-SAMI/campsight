export default function doesSearchMatch(obj, keyVal) {
    let key = keyVal.key;
    let val = keyVal.value;
    if (typeof obj[key] === 'number') {
        return obj[key] === parseInt(val, 10);
    }
    else if (obj[key] instanceof Date) {
        let nDate = new Date(val);
        return obj[key] === nDate;
    }
    return obj[key] === val;
}