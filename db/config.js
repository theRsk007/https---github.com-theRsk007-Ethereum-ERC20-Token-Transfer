const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

// Create database connection and export
exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log(`Database connected successfully...!`);
    })
    .catch( (error) => {
        console.log(`Database connection failed!`, error);
        process.exit(1)
    })
}