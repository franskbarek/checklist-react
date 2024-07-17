
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Endpoint from '../utils/api-endpoint';
import { Button, FormContainer } from '../components';


const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const register = async () => {
        axios.post(Endpoint.register, {
            email: email,
            username: username,
            password: password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        register();
        navigate('/')
    }

    return (
        <section className="mt-[20vh]">
            <FormContainer>
                <h1 className='text-center p-2'>Form Register</h1>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col items-end justify-center gap-4 p-10'>
                    <div>
                        <label>Username: </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex mt-5 gap-5">
                    <Button name="Register"/>
                    </div>
                </form>
            </FormContainer>
        </section>
    )
}

export default Register
