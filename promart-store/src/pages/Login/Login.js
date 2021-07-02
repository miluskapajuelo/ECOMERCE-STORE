import React from 'react';
import Title from './title/Title'
import Label from './label/Label'
import Input from './input/Input'
import './Login.sass';


const Login = () => {
    return(
        <div className="login-container">   
            <Title text="Iniciar sesión"/>
            <Label text="Correo electrónico"/>
            <Input
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder:'Ingrese su usuario'
            }} />
            <Label text="Contraseña"/>
            <Input />
        </div>
    )
}

export default Login