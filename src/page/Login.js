import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import {login} from '../redux/reducer/listslice'


function Login() {
    const [inputtext,setInputtext]=useState("");
    const [inputpass,setInputpass]=useState("");
    const dispatch = useDispatch();

    const nav = useNavigate();
    const move=()=>{
        if(inputtext.trim() !="" && inputpass.trim() != ""){
            nav('../');
            dispatch(login());
        }else{
            alert("아이디, 비밀번호를 확인해 주세요");
        }
    }

    const enter=(e)=>{
        if(e.key==="Enter"){
            console.log("hi")
            move();
        }
    }

    return (
        <div className="Login">
            <h1>로그인</h1>
            <div className="form">
                <label>이메일</label>
                <input type="text" placeholder="id"  onChange={(e)=>setInputtext(e.target.value)} onKeyDown={(e)=>enter(e)}/>
                <label>비밀번호</label>
                <input type="password" placeholder="password"  onChange={(e)=>setInputpass(e.target.value)} onKeyDown={(e)=>enter(e)}/>
                <button type="submit" onClick={move}>로그인</button>
                <hr />
                <button type="button">회원가입</button>
            </div>

        </div>
    )
}

export default Login
