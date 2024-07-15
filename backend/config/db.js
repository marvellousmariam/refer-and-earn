const mysql = require('mysql2/promise')
const MySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'adewunmi2020',
    database: 'refer_earn'
});
module.exports=MySqlPool;