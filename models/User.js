const { Sequelize, DataTypes } = require("sequelize");

const User = (sequelize) => { 
  db.define("User", {
  username: {
    type: Data.STRING
  }
})

}

module.exports = {
  User
}