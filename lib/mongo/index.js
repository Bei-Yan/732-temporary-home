import {MongoClient} from 'mangodb'

const URI = "mongodb+srv://hxu612:kwivO28J0EiwlBJn@cluster0.a9xoa1c.mongodb.net/firstDB?retryWrites=true&w=majority"

const options = {}

let client = new MongoClient(URI, options)

//Not re-creating client if there is exists one
if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
}
let clientPromise = global._mongoClientPromise

export default clientPromise;
