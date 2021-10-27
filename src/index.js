const dotenv = require('dotenv');
dotenv.config();

console.log(`MI PUERTO ES ${process.env.PORT || 8080}`);
