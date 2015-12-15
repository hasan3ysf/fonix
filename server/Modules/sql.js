var Agent = require('sqlagent/sqlserver');

var sql = new Agent({server: 'BK-SAP', database: 'BKMEC_Live', user: 'sa', password: 'sql@123' });

module.exports = sql;