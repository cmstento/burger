var con = require('./connection.js');

function selectAll(tableName){
  return new Promise(function (resolve, reject) {
      con.query(`select * from ${tableName}`, function (error, results, fields) {
        resolve(results)
      })
  })
}

function insertOne(tableName, columns, values){
    return new Promise(function (resolve, reject) {
        con.query(`insert into ${tableName} (${columns.join()}) values ("${values.join('","')}")`, function (error, results, fields) {
            resolve(results)
        })
    })
}

function updateOne(tableName, columns, values, id){
    var columnValuePairs = []
    for (var i=0; i<columns.length;i++){
        columnValuePairs.push(`${columns[i]} = ${values[i]}`)
    }
    return new Promise(function (resolve, reject) {
        con.query(`update ${tableName} set ${columnValuePairs.join()} where id = ${id}`, function (error, results, fields) {
            resolve(results)
        })
    })
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
}