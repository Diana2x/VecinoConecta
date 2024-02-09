import React, { useState } from 'react'
import './LoginForm.css';
import { FaUser, FaLock, FaLeaf } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'Diana' && password === 'abcd1234') {
            navigate('/dashboard');

        } else {
            setError('Invalid username or password');
            console.log('Invalid username or password');
        }
        setSubmitted(true);
    };

    return (
        <div id='login'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>
                        Vecino Conecta <FaLeaf />
                    </h1>
                    <div className="input-box">
                        <input
                            type='text'
                            placeholder='Usuario'
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type='password'
                            placeholder='Contraseña'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="remember-forgot">
                        <label><input type='checkbox' />Recordarme</label>
                        <a href='#'>¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                    <div className="register-link">
                        <p>¿Aun no tienes una cuenta? <a href='#'>Regístrate</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;