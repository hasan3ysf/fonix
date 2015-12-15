var sql = require("./sql.js");

//var Agent = require('sqlagent/sqlserver');

//var sql = new Agent({server: 'BK-SAP', database: 'BKMEC_Live', user: 'sa', password: 'sql@123' });

//module.exports = sql;

module.exports = {
     items: function (ws) {
    
        var items = sql.query('items', 'SELECT ItemCode, WhsCode, OnHand FROM OITW T0');

    //   items.where('itemcode', 'like', 'RM%');
       items.where('itemcode', '=', 'RM-mLLDPE');
       items.and();
       items.where('WhsCode', '=', 'RM');
      //  ws.send('hello man');
        sql.exec(function(err, rows) {
   	     	if (!err) 
                  ws.send(JSON.stringify(rows.items));
               // console.log(rows.items);
		      //else console.log(err);
      //  return JSON.stringify(rows.items);
    });
 //  return 'hi';
 }
}
