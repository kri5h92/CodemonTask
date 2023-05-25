const mongoose = require('mongoose')

const connectionMongoDB = async (dburl) => {
    try {
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = connectionMongoDB