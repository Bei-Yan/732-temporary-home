import {useState} from 'react';

function RegisterForm(){

    const [form, setForm] = useState({
        userName:"",
        password:"",
        email:""
    })

    function register(){
        console.log("Register Start")
    }

    return (
        <form onSubmit={register}>
            <label>Username: <input onChange={e => {
                setForm({
                    ...form,
                    userName: e.target.value
                })
            }}/>
            </label>
            <label>Password: <input type="password" onChange={e => {
                setForm({
                    ...form,
                    password: e.target.value
                })
            }}/>
            </label>
            <label>Email Address: <input onChange={e => {
                setForm({
                    ...form,
                    email: e.target.value
                })
            }}/>
            </label>

            <p>Your account is {form.userName}</p>

            <input type="submit" value="Submit" />

        </form>
    );
}

export default RegisterForm;
