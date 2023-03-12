import { MongoClient } from 'mongodb'

const connectionString = process.env.MONGO_CONNECTION
const options = {}

const client = new MongoClient(connectionString, options)

//Not re-creating client if there is exists one
if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
}

const clientPromise = await global._mongoClientPromise
const db = await clientPromise.db()

export default db;
