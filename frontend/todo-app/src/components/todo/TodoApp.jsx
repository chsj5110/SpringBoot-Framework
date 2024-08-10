import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<LoginComponent /> }></Route>
                    <Route path='/login' element={<LoginComponent /> }></Route>
                    <Route path='/welcome' element={<WelcomeComponent /> }></Route>
                    <Route path='*' element={<ErrorComponent /> }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){

   const [username, setUsername] = useState('Soojin')
   const [password, setPassword] = useState('')
   const [showSuccessMessage, setShowSuccessMessage] = useState(false)
   const [showErrorMessage, setShowErrorMessage] = useState(false)

   const navigate = useNavigate();

   function handleUsernameChange(event){
    setUsername(event.target.value);
   }

   function handlePasswordChange(event){
    setPassword(event.target.value);
   }

   function handleSubmit(){
    if(username ==='Soojin' && password ==='1234'){
        console.log("성공")
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
        navigate('/welcome')
    }else{
        console.log("실패")
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
    }
   }

// function SuccessMessageComponent(){
//     if(showSuccessMessage){
//         return(<div className='successMessage'>Authenticated Successfully</div>)
//     }

//     return null
// }

// function ErrorMessageComponent(){
//     if(showErrorMessage){
//         return(<div className='errorMessage'>Authentication Failed. Please check your credentals.</div>)
//     }

//     return null
// }

    return(
        <div className="Login">
            <h1>덤벼라 세상아!</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
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



function WelcomeComponent(){
    return(
        <div className="WelcomeComponent">
            <h1>어서오십시오</h1>
            <div>아니요 사실 덤비지마세요 ㅜ</div>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>없는 페이지</h1>
            <div>
                딱히 미안한것도 죄송한것도 아니지만 사과를 해야할때 쓰는 페이지. 404 에러
            </div>
        </div>
    )
}