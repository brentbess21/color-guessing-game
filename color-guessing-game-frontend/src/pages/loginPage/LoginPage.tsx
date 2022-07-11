import React, {ChangeEvent, FormEvent, useState} from 'react';
import './LoginPage.scss';
import {useNavigate} from "react-router";

interface FormValues {
    email: string;
    password: string
}

const LoginPage = () => {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        password: ''
    })

    function changeHandler(e : ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    function handleLogin(e: FormEvent) {
        //todo: handle actual login logic after backend is setup
        e.preventDefault();
        if( formValues.email === '' || formValues.password === '') {
            console.log('You are missing a required field')
        }
        navigate('/home')
    }

    return (
        <div className={'loginPage'}>
            <div className={'headerContainer'}>
                <h1>Guess it</h1>
                <button className={'textButton'} onClick={()=>{navigate('/')}}>Back</button>
            </div>
            <div className={'titleContainer'}>
                <h3>Login</h3>
            </div>
            <div className={'formContainer'}>
                <form>
                    <label> Email
                        <input
                            type={'email'}
                            name={'email'}
                            value={formValues.email}
                            onChange={changeHandler}
                        />
                    </label>
                    <label> Password
                        <input
                            type={'password'}
                            name={'password'}
                            value={formValues.password}
                            onChange={changeHandler}
                        />
                    </label>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;