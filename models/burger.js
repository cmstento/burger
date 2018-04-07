var orm = require('../db/config/orm.js')

function selectAllBurgers() {
  return orm['selectAll']('burgers')
}

function insertBurger(burger){
    return orm['insertOne']('burgers', Object.keys(burger), Object.values(burger))
}

function updateOneBurger(burger, id){
    return orm['updateOne']('burgers', Object.keys(burger), Object.values(burger), id)
}

module.exports= {
    selectAllBurgers: selectAllBurgers,
    insertBurger: insertBurger,
    updateOneBurger: updateOneBurger

}

