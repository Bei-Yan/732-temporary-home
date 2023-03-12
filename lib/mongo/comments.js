import clientPromise from "./index";

let client;
let db;
let comments;

async function init(){
    if (db) return
    try{
        client = await clientPromise
        db = await client.db()
        comments = await db.collection("comments")
    }
    catch (e) {
        throw new Error(e)
    }
}

export async function getComments(){
    try{
        while (!comments){
            await init()
        }
        return await comments.find({}).limit(10).toArray()

    }
    catch (e) {
        throw new Error(e)
    }

}
