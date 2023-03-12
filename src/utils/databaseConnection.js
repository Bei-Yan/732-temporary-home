
const mongoose = require('mongoose')

const dbURL = "mongodb+srv://hxu612:kwivO28J0EiwlBJn@cluster0.a9xoa1c.mongodb.net/firstDB?retryWrites=true&w=majority"

const config = {
    dbURL: dbURL,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbURL, config)
