import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/reducer/listslice'
function Header() {

    const login_ok = useSelector(state=>state.List.login);
    const dispatch = useDispatch();

    return (
        <header>
            <div className="login">
                <FontAwesomeIcon icon={faUser} />
                {
                    login_ok === false ?
                    <Link to='/Login'>로그인</Link> :
                    <Link to='/' onClick={()=>dispatch(login())}>로그아웃</Link>
                }
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">
                        <img src="https://aape.jp/client_info/AAPE/view/userweb/images/logo.png" alt="" />
                    </Link>
                </h1>
            </div>

        </header>
    )
}

export default Header
