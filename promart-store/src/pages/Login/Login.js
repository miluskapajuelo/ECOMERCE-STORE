import React, {useState} from 'react';
import Title from './title/Title'
import Label from './label/Label'
import Input from './input/Input'
import './Login.sass';



const Login = () => {

    const [user, setUser]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState(false);
    const [loginError, setLoginError]=useState(false);

    function handleChange(name, value) {
        if(name ==='email'){
            setUser(value)
        }
        else{
            if(value.length >6 || value.length === 0 ){
                setPasswordError(false)
                setPassword(value)    
            }
            else{
                setPasswordError(true)
                
            }
            
        }
    }

    function ifMatch(param){
        if(param.user.length >0 && param.password.length>0){
            if(param.user ==="miluskapajuelo" && param.password ==='1234567'){
                /* let ac = { param.user, param.password} lo desestructuramos */
                const {user, password} = param
                let ac = {user, password}
                let account = JSON.stringify(ac)
                localStorage.setItem('account', account)
                setLoginError(false)
            }
            else{
                setLoginError(true)
                
            }
            
        }
        else{
            setLoginError(true)
            console.log('loginError, ', loginError)
        }
    }

    function handleSubmit(){
        const account = {user, password}
        if(account){
            ifMatch(account)
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
            <Label text="email o contraseña incorrecta" classText="error-label"/>}
            <div className='submit-button-container'>
            <button 
            className='submit-button'
            onClick={handleSubmit}>Enviar</button> 
            </div>           
        </div>
    )
}

export default Login