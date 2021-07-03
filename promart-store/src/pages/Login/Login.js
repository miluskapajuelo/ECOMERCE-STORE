import React, {useState} from 'react';
import Title from './title/Title'
import Label from './label/Label'
import Input from './input/Input'
import './Login.sass';



const Login = () => {

    const [user, setUser]=useState('');
    const [password, setPassword]=useState('');

    function handleChange(name, value) {
        if(name ==='email'){
            setUser(value)
        }
        else{
            setPassword(value)
        }
    }

    function handleSubmit(){
        const account = {user, password}
        if(account){
            console.log(account)
        }
    }

    return(
        <div className="login-container">   
        <div className="login-content">
            <Title text="Iniciar sesión"/>
            <Label text="Email"/>
            <Input
            attribute={{
                id: 'email',
                name: 'email',
                type: 'text',
                placeholder:'Ingrese su email'
            }}
            handleChange= {handleChange} />
            <Label text="Contraseña"/>
            <Input
            attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'contraseña',
                placeholder:'Ingrese su contraseña'
            }}
            handleChange= {handleChange} />
            </div>
            <div className='submit-button-container'>
            <button 
            className='submit-button'
            onClick={handleSubmit}>Enviar</button> 
            </div>           
        </div>
    )
}

export default Login