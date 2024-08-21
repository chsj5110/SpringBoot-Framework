import { useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retriveHelloWorldPathVariable } from './api/HelloWorldApiService'

function WelcomeComponent(){

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log('열기')
        

        //rest api 부르기 -> axios (npm install axios)
        // axios.get('http://localhost:8080/hello-world')
        //     .then(  (response) => successfulResponse(response)  )
        //     .catch( (error) => errorResponse(error) )
        //     .finally(   () => console.log('cleanup')    )

        // retriveHelloWorldBean()
        //     .then(  (response) => successfulResponse(response)  )
        //     .catch( (error) => errorResponse(error) )
        //     .finally(   () => console.log('cleanup')    )

        retriveHelloWorldPathVariable('Soojin')
        .then(  (response) => successfulResponse(response)  )
        .catch( (error) => errorResponse(error) )
        .finally(   () => console.log('cleanup')    )
    }

    function successfulResponse(response){
        console.log(response)
        // setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }


    return(
        <div className="WelcomeComponent">
            <h1>어서오십시오 {username}</h1>
            <div>사실 덤비지마세요 ㅜ</div>
            {/* <a>를 쓰면 전체 페이지가 새로고침 되지만 <Link>를 쓰면 해당 부분만 새로운 컴포넌트로 새로고침 된다 */}
            <div>
                <Link to="/todos">해야 할 일 보러가기</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>HELLO WORLD 열기</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}


export default WelcomeComponent