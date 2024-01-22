/**Loading Mongoose **/
const mongoose = require('mongoose');

// /**Build Data Base connection String **/
// const db_url = 'mongodb://127.0.0.1:27017/Foodrestro';
const db_url = 'mongodb+srv://anjan:a123@food-rest-api.inuqoav.mongodb.net/Foodrestro';

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