import {React, useState} from 'react'
import Login from './Login';
import Register from './Register';

function CurrentForm() {
    const [currentForm, setCurrentForm]= useState("login")

    function changeForm() {
        setCurrentForm("register")
    }
    function changeFormToLogin() {
        setCurrentForm("login")
    }
    return(
        <>
        {
            currentForm === "login" ? <Login changeForm={changeForm}/> : <Register changeFormToLogin={changeFormToLogin}/>
        }
        </>
    )
}
export default CurrentForm;