import React, { useState } from 'react'
import './login.less'

interface loginLi {
    name: string,
    link?: string
}

interface loginNavLi {
    [index:string]: Array<loginLi>
}

function Login () {

    const loginNavLi:loginNavLi = {
        'unlogin': [
            {
                name: '登录',
            },
            {
                name: '注册'
            }
        ]
    }

    let [state, setState] = useState('unlogin')

    return (
        <div className="login-area">
            <img src="//static.hdslb.com/images/akari.jpg" alt=""/>

            <ul className="login-nav-ul">
                {
                    loginNavLi[state].map((item) => {
                        return (
                            <li key={item.name} className="login-nav-li">
                                <a href={item.link}>
                                    { item.name }
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Login