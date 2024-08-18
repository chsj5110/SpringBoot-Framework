import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent(){

    const [username, setUsername] = useState('Soojin')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
 
    const navigate = useNavigate();
    const authContext = useAuth()
 
    function handleUsernameChange(event){
     setUsername(event.target.value);
    }
 
    function handlePasswordChange(event){
     setPassword(event.target.value);
    }
 
    function handleSubmit(){
     if(authContext.login(username, password)){
         //${} 를 사용할때는 ''이 아닌 ``(틱)을 쓴다
         navigate(`/welcome/${username}`)
     }else{
         setShowErrorMessage(true)
     }
    }
 
 
     return(
         <div className="Login">
             <h1>덤벼라 세상아!</h1>
             {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentals.</div>}
             <div className="LoginForm">
                 <div>
                     <label>User Name</label>
                     <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                 </div>
                 <div>
                     <label>Password</label>
                     <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                 </div>
                 <div>
                     <button type="button" name="login" onClick={handleSubmit}>login</button>
                 </div>
             </div>
         </div>
     )
 }
 
 export default LoginComponent