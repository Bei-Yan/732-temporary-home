import clientPromise from "./index";

let client;
let db;
let comments;

async function init(){
    if (db) return
    try{
        client = await clientPromise
        db = await client.db()
        comments = await db.collection()
    }
    catch (e) {
        throw new Error("Failed to establish connection to database")
    }
}

export async function getComments(){
    try{
        if (!comments){
            await init()
        }
        return await comments.find({}).limit(5).toArray()
    }
    catch (e) {
        throw new Error("Failed to query comments from database")
    }

}
