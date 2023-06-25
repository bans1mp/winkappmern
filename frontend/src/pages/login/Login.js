import './login.css'
import {useContext, useRef} from "react"
import {loginCall} from "../../apiCalls" ;
import {AuthContext} from "../../context/AuthContext" ;
import { CircularProgress } from '@mui/material';

const Login = () => {
    const email = useRef() ;
    const password = useRef() ;

    const {user ,isFetching , error , dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault() ;
        loginCall({email: email.current.value ,password: password.current.value} , dispatch)
    }
    console.log(user)

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Wink ;)</h3>
                <span className="loginDesc">Connect with friends and the world around you on Wink ;)</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input required placeholder="Email" className="loginInput" type="email" ref={email}/>
                    <input minLength="6" required placeholder="Password" className="loginInput" type="password" ref={password}/>
                    <button type='submit' className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress style={{'color': 'white'}} size="20px"/> : "Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                    {isFetching ? <CircularProgress style={{'color': 'white'}} size="20px"/> : "Create a new account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
