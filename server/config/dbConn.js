const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);

        console.log('Connecting to MongoDB...');
        console.log(process.env.DATABASE_URI);


        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB