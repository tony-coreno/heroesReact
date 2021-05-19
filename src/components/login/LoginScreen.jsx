import React from 'react'
import {useHistory} from 'react-router-dom';

const LoginScreen = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.replace('/')
    }
    return ( 
        <div className="container mt-5">
            <h2>Login Screen</h2>
            <hr />

            <button className="btn btn-primary" onClick={ handleLogin }>
                Ingresar
            </button>
        </div>
     );
}
 
export default LoginScreen;