import { useState } from 'react';


export default function registerForm() {

    const [form, setForm] = useState({
        name: "",
        password: "",
        email: ""
    })

    async function submitHandler(e) {
        e.preventDefault();

        const postData = async () => {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            return response.json()
        }
        postData().then((data) => alert(data.message))
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Username: <input onChange={e => {
                setForm({
                    ...form,
                    name: e.target.value
                })
            }} />
            </label>
            <label>Password: <input type="password" onChange={e => {
                setForm({
                    ...form,
                    password: e.target.value
                })
            }} />
            </label>
            <label>Email Address: <input onChange={e => {
                setForm({
                    ...form,
                    email: e.target.value
                })
            }} />
            </label>

            <p>Your account is {form.userName}</p>

            <input type="submit" value="Submit" />

        </form>
    );
}
