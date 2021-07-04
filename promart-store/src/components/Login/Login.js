import React, {useState} from 'react';
import Title from './title/Title'
import Label from './label/Label'
import Input from './input/Input'
import {getToken} from './../../services/login'
import './Login.sass';
import {useHistory} from 'react-router-dom'




const Login = () => {

    const [username, setUser]=useState('');
    const [password, setPassword]=useState('');
    const [loginError, setLoginError]=useState('');
    const [passwordError, setPasswordError]=useState(false);

    let history = useHistory()

    const handleChange = (name, value) => {
        if(name==='email'){
            setUser(value)
            setLoginError('')   
        }
        else{
            if(value.length >5 || value.length === 0 ){
                setPassword(value)
                setLoginError('')
                setPasswordError(false)
            }
            else{
                setPasswordError(true)
                setLoginError(false);
                
            }
        }
        
              
    }
    

     /* submit form */
     const handleSubmit= async(e) => {
        e.preventDefault();
        const account = {username, password}
        if(account){
            const resp = await getToken(account);
            if(resp.data.status !== "Error"){
                let token= resp.data.token
                localStorage.setItem('token', token)
                history.push("/Products")
                
            }
                setLoginError(resp.data.msg)
            } 
        }
           
    return(
        <div className="login-container">   
        <div className="login-content">
            <Title text="Iniciar sesión"/>
            <Label text="Email" classText="label-text"/>
            <Input
            attribute={{
                id: 'email',
                name: 'email',
                type: 'email',
                placeholder:'Ingrese su email'
            }}
            handleChange= {handleChange} />
            <Label text="Contraseña" classText="label-text"/>
            <Input
            attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder:'Ingrese su contraseña'
            }}
            handleChange= {handleChange}
            param={passwordError}
             />
            </div>
            {loginError &&
            <Label text={loginError} classText="error-label"/>}
            <div className='submit-button-container'>
            <button 
            className='enabled-button' 
            onClick={handleSubmit}>Enviar</button>
            </div>           
        </div>
    )
}

export default Login