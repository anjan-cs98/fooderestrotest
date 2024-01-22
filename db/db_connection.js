/**Loading Mongoose **/
const mongoose = require('mongoose');
/**lets connect mongodb data base **/
const con = mongoose.connect(db_url)
       .then(() => {
              console.log('Mongodb data Base connected');
       })
       .catch((error) => {
              console.log(error);
       });


module.exports = con;
console.log('Data connection string is ready to use');      
