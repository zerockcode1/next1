import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const initData = {
    mid:'',
    mpw:''
}

const Login = () => {


    const router = useRouter()
    const [loginData, setLoginData] = useState(initData)

    const change = (field, e) => {

        loginData[field] = e.target.value

        //console.log({...loginData})

        setLoginData({...loginData})
    }

    const doLogin = () => {

        axios.post("http://localhost:8080/generateToken", loginData)
            .then(res  => {
                console.log(res.data)

                localStorage.setItem("access", res.data.access)
                localStorage.setItem("refresh", res.data.refresh)

                router.replace('/todo/todoList')

            })
            .catch(err => {
                console.log(err)
            })

    }


    return (
        <div>
           <input type='text' value={loginData.mid} onChange={(e) => change("mid",e)}/>
           <input type='text' value={loginData.mpw} onChange={(e) => change("mpw",e)}/>
           <button onClick={() =>doLogin()}>LOGIN</button>
        </div>
    );
};

export default Login;