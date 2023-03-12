import clientPromise from "./index";

let client;
let db;
let users;

async function init(){
    if (db) return
    try{
        client = await clientPromise
        db = await client.db()
        users = await db.collection("users")
    }
    catch (e) {
        throw new Error(e)
    }
}

export async function register(form){
    try{
        while (!users){
            await init()
        }
        console.log(form)
        return await users.insertOne(form)

    }
    catch (e) {
        throw new Error(e)
    }

}
