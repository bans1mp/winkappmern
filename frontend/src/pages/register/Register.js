import './register.css'
import {useRef} from "react" 
import axios from "axios" ;
import {useNavigate} from "react-router-dom" ;

const Register = () => {
    const email = useRef() ;
    const username = useRef() ;
    const password = useRef() ;
    const passwordAgain = useRef() ;
    const history = useNavigate() ;

    const handleClick = async (e) => {
        e.preventDefault() ;
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords do not match") ;
        }else {
            const user = {
                username: username.current.value ,
                email: email.current.value ,
                password: password.current.value 
            }
            try {
                const res = await axios.post("/auth/register" , user) ;
                history("/login")
            } catch (err) {
                console.log(err)
            }
            
         }
    }


  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Wink ;)</h3>
                <span className="loginDesc">Connect with friends and the world around you on Wink ;)</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input ref={username} required placeholder="Username" className="loginInput" />
                    <input ref={email} required placeholder="Email" className="loginInput" type='email'/>
                    <input ref={password} required placeholder="Password" className="loginInput" type='password' minLength={6}/>
                    <input ref={passwordAgain} required placeholder="Password Again" className="loginInput" type='password' />
                    <button className="loginButton" type='submit'>Sign Up</button>
                    
                    <button className="loginRegisterButton">Already have an Account?</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
