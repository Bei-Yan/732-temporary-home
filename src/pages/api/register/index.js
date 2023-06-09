import { register } from "@lib/mongo/users";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await RegisterUser(req, res);
    }
}

async function RegisterUser(req,res) {
    try {
        const results = await register(req.body)
        return res.status(200).json({ message: "Register Successfully Completed" })
    }
    catch (e) {
        return res.status(500).json({ error: e.message })
    }
}
