const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://senjeev:senjeev77@cluster0.lpuktmw.mongodb.net/")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
        console.log(error);
    }
}

module.exports = {db}