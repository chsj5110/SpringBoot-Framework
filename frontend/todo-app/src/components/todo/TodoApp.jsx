import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                <Route path='/' element={<LoginComponent /> } />
                    <Route path='/login' element={<LoginComponent /> } />
                    <Route path='/welcome/:username' element={<WelcomeComponent /> } />
                    <Route path='/todos' element={<ListTodosComponent /> } />
                    <Route path='/logout' element={<LogoutComponent /> } />
                    <Route path='*' element={<ErrorComponent /> } />
                </Routes>
            <FooterComponent />
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
        //${} 를 사용할때는 ''이 아닌 ``(틱)을 쓴다
        navigate(`/welcome/${username}`)
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

    const {username} = useParams()

    console.log(username)

    return(
        <div className="WelcomeComponent">
            <h1>어서오십시오 {username}</h1>
            <div>사실 덤비지마세요 ㅜ</div>
            {/* <a>를 쓰면 전체 페이지가 새로고침 되지만 <Link>를 쓰면 해당 부분만 새로운 컴포넌트로 새로고침 된다 */}
            <div><Link to="/todos">해야 할 일 보러가기</Link></div>
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

function ListTodosComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+2, today.getMonth(), today.getDay())

    const todos = [
                    {id:1, description: '공부하기', done: false, targetDate:targetDate},
                    {id:2, description: '빨래' , done: false, targetDate:targetDate},
                    {id:3, description: '청소', done: false, targetDate:targetDate},
                ]

    return(
        <div className="container">
            <h1>할 일</h1>
            <div>
                할 일 목록
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.google.co.kr/">Google</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

function FooterComponent(){
    return(
        <footer className="footer">
            <div className="container"> 이 페이지는 내가 만들었습니다 </div>
        </footer>
    )
}

function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1>로그아웃 완료</h1>
            <div>
                안니옹히 가세용
            </div>
        </div>
    )
}