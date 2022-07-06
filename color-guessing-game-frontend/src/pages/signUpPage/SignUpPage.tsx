import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './SignUpPage.scss';
import {useNavigate} from "react-router";
import classNames from "classnames";
import serviceFactory from "../../services/serviceFactory";
import UserService from "../../services/user/user.service";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpPage : React.FC = () => {
    let navigate = useNavigate();
    const userService = serviceFactory.get<UserService>('UserService');
    const [isNext, setIsNext] = useState<boolean>(false);
    const [has8Characters, setHas8Characters] = useState<boolean>(false);
    const [containsNumber, setContainsNumber] = useState<boolean>(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(()=>{
        validatePassword(formValues.password)
    }, [formValues.password])

    function handleBack () {
        if(isNext) return setIsNext(false);
        navigate('/');
    }

    function validatePassword(password: string) {
        // Checking 8 characters
        setHas8Characters(password.length >= 8);
        // Regex for checking numbers
        setContainsNumber(/\d/.test(password));
        // Regex for checking special character
        setHasSpecialCharacter(/[!@#$%^&*]/.test(password));
    }

    function changeHandler (e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }


    function handleSignUp (e: FormEvent) {
        e.preventDefault();
        if(formValues.password !== formValues.confirmPassword) {
            console.log('Passwords do not match');
        }
        if(
            formValues.firstName === '' ||
            formValues.lastName === '' ||
            formValues.email === '' ||
            formValues.password === '' ||
            formValues.confirmPassword === ''

        ) {
            console.log('You are missing a required field')
        }
    }

    function renderInitialForm() {
        return (
            <>
                <form>
                    <label> First Name
                        <input
                            type={'text'}
                            name={'firstName'}
                            value={formValues.firstName}
                            onChange={changeHandler}
                        />
                    </label>
                    <label> Last Name
                        <input
                            type={'text'}
                            name={'lastName'}
                            value={formValues.lastName}
                            onChange={changeHandler}
                        />
                    </label>
                    <label> Email
                        <input
                            type={'email'}
                            name={'email'}
                            value={formValues.email}
                            onChange={changeHandler}
                        />
                    </label>
                </form>
                <button onClick={()=>{setIsNext(true)}}>Next</button>
            </>
        )
    }

    function renderPasswordForm() {
        return (
            <>
                <div className={'requirementsContainer'}>
                    <h3 className={'requirementsTitle'}>Your password must contain:</h3>
                    <div className={'requirements'}>
                        <h3
                            className={classNames({
                                green: has8Characters
                            })}
                        >
                            <i className={classNames( "fa-solid fa-check", {
                                green: has8Characters
                            }
                           )}/>
                            A minimum of 8 characters
                        </h3>
                        <h3
                            className={classNames({
                                green: containsNumber
                            })}
                        >
                            <i className={classNames( "fa-solid fa-check", {
                                    green: containsNumber
                                }
                            )}/>
                            One number
                        </h3>
                        <h3
                            className={classNames({
                                green: hasSpecialCharacter
                            })}
                        >
                            <i className={classNames( "fa-solid fa-check", {
                                    green: hasSpecialCharacter
                                }
                            )}/>
                            One special character
                        </h3>
                    </div>
                </div>
               <form>
                   <label> Password
                       <input
                           type={'password'}
                           name={'password'}
                           value={formValues.password}
                           onChange={changeHandler}
                       />
                   </label>
                   <label> Confirm Password
                       <input
                           type={'password'}
                           name={'confirmPassword'}
                           value={formValues.confirmPassword}
                           onChange={changeHandler}
                       />
                   </label>
                   <button onClick={handleSignUp}>Sign Up</button>
               </form>
            </>
        )
    }

    return (
        <div className={'signUpPage'}>
            <div className={'headerContainer'}>
                <h1>Guess it</h1>
                <button className={'textButton'} onClick={handleBack}>Back</button>
            </div>
            <div className={'titleContainer'}>
                <h3>Sign Up</h3>
            </div>
            <div className={'formContainer'}>
                {isNext? renderPasswordForm() : renderInitialForm()}
            </div>
            {/*<button onClick={()=>{console.log(formValues)}}>click for info</button>*/}
        </div>
    )
}

export default SignUpPage;