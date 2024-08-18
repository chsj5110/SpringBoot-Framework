import { useParams, Link} from 'react-router-dom'

function WelcomeComponent(){

    const {username} = useParams()

    return(
        <div className="WelcomeComponent">
            <h1>어서오십시오 {username}</h1>
            <div>사실 덤비지마세요 ㅜ</div>
            {/* <a>를 쓰면 전체 페이지가 새로고침 되지만 <Link>를 쓰면 해당 부분만 새로운 컴포넌트로 새로고침 된다 */}
            <div><Link to="/todos">해야 할 일 보러가기</Link></div>
        </div>
    )
}


export default WelcomeComponent