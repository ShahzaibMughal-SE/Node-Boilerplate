const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

exports.connectDB = () => {
    mongoose.connect(
        process.env.CONNECTIONSTRING,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then((res) => console.log('> Connected...')
    ).catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`)
    )
}