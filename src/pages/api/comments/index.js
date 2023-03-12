import { getComments } from "@lib/mongo/comments";


export default async function handler(req, res) {
    if (req.method === 'GET'){
        try{
            const comments = await getComments()
            console.log(comments)
            return res.status(200).json(comments)
        }
        catch (e) {
            return res.status(500).json({error: e.message})
        }
    }
}
