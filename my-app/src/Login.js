import './index.css';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthApi from './AuthApi';

// import { useCookies } from 'react-cookie';

const Login = () => {
    const nav = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const Auth = useContext(AuthApi);

    const handleSubmit = (e) => {
        e.preventDefault();
        Auth.setAuth(true);
        nav('/Dashboard');
        // setCookie('Name', userName, { path: '/'});
        // setCookie('Password', password, { path: '/'});
    }

    return (
        <div className='LoginPage-Body'>
            <div className="Login-Box">
                    <h1 className="Login-Box-Title">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type='text' 
                            name='userName'
                            placeholder="UserName"
                            value={userName} 
                            required
                            onChange={(e)=>{setUserName(e.target.value)}}
                        />
                        <input type='password' 
                            name='Password'
                            placeholder="Password"
                            value={password} 
                            required
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <input type='submit'
                            name='Submit'
                            value='Login'
                        />
                    </form>
            </div>
        </div>
    )
}

export default Login;
