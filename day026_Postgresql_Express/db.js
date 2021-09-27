const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'movies',
    password:'Raz2485',
    port:5432
});
module.exports = pool;