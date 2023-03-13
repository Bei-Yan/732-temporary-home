import db from "./index";

const comments = await db.collection("comments");

export async function getComments() {
    try {
        return await comments.find({}).limit(10).toArray()
    }
    catch (e) {
        throw new Error(e)
    }

}
