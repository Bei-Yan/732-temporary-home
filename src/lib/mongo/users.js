import db from "./index";

const users = await db.collection("users");

export async function register(form) {
    try {
        return await users.insertOne(form)
    }
    catch (e) {
        throw new Error(e)
    }

}
