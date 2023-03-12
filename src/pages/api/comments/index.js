import { getComments } from "../../../../lib/mongo/comments";


export default async function handler(req, res) {
    if (req.method === 'GET'){
        try{
            const {comments, error} = await getComments()
            if (error) throw new Error(error);
            return res.status(200).json( comments)
        }
        catch (e) {
            return res.status(500).json({error: error.message})
        }
    }
}
