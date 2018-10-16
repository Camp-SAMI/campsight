const formatRelative = require('date-fns/formatRelative');
const camelCase = require('./camelCase');

function parseQueryToObject(fieldTypes, queryParams) {
    let queryObj = {};
    for (let a = 0; a < queryParams.length; a++) {
        let curr = queryParams[a].split(':');
        let key = camelCase(curr[0].split(' ').join('').trim());
        if (fieldTypes[key]) {
          if (fieldTypes[key].type === 'INTEGER'){
            queryObj[key] = parseInt(curr[1], 10);
          }
          else if (fieldTypes[key].type === 'TIMESTAMP WITH TIME ZONE' && (key === 'startTime' || 'endTime')) {
            queryObj[key] = formatRelative(new Date(curr[1]), 'MM/DD/YYYY');
          }
          else if (fieldTypes[key].type === 'TIMESTAMP WITH TIMEZONE' && (key === 'createdAt' || 'updatedAt')) {
            queryObj[key] = new Date(curr[1]);
          }
          else
            queryObj[key] = curr[1];
        }
    };
    return queryObj;
}

module.exports = parseQueryToObject;