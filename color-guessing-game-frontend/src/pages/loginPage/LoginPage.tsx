import React, {ChangeEvent, FormEvent, useState} from 'react';
import './LoginPage.scss';
import {useNavigate} from "react-router";
import {loginUserByPassword} from "../../services/user/user.service";
import {SET_CURRENT_USER} from "../../state/actions/userActions";
import {connect} from "react-redux";

interface FormValues {
    email: string;
    password: string
}

interface LoginPageStateProps {
    currentUser: Model.User.User;
}

interface LoginPageDispatchProps {
    setCurrentUser : (user : Model.User.User)=>({type: string, payload: Model.User.User})
}

type LoginPageProps = LoginPageStateProps & LoginPageDispatchProps

const LoginPage : React.FC<LoginPageProps> = (props: LoginPageProps ) => {
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

    async function handleLogin(e: FormEvent) {
        //todo: handle actual login logic after backend is setup
        e.preventDefault();
        if( formValues.email === '' || formValues.password === '') {
            alert('You are missing a required field')
        }
        try {
            const data : Model.User.LoginData = {
                email: formValues.email,
                password: formValues.password
            }
            const user : Model.User.User = await loginUserByPassword(data);
            props.setCurrentUser(user);
            if(props.currentUser) navigate('/home')

        } catch (err) {
            console.log(err)
            alert('There was an error. Please try again')
        }
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

const mapStateToProps = (state: any) => {
    return ({
        currentUser: state.user.currentUser
    })
}

const mapDispatchToProps = {
    setCurrentUser : (user : Model.User.User)=>({type: SET_CURRENT_USER, payload: user})
}

export default connect<LoginPageStateProps, LoginPageDispatchProps>(mapStateToProps, mapDispatchToProps)(LoginPage);