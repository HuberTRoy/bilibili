import React, { useRef, useState } from 'react'
import './header.less'
import Search from '@/components/search/search'
import Login from '@/components/login/login'
import { Button } from 'antd';
import { transform } from 'typescript';

interface navLink {
    prefix?: string,
    name: string,
    suffix?: string
}

function Header () {
    // header内容并不多
    // 一行状态栏。
    // 后面是一个background

    const navLink:Array<navLink> = [
        {
            name: '主站'
        },
        {
            name: '番剧'
        },
        {
            name: '游戏中心'
        },
        {
            name: '直播'
        },
        {
            name: '会员购'
        },
        {
            name: '漫画'
        },
        {
            name: '赛事'
        },
        {
            name: '下载APP'
        }
    ]

    let defaultLayerOne = {
        transform: 'translate(0px)',
        current: 0,
        filter: 'blur(0px)',
        blurContent: 0
    }

    let defaultLayerTwo = {
        transform: 'translate(0px)',
        current: 0,
        filter: 'blur(5px)',
        blurContent: 5
    }

    const [layerOne, setLayerOne] = useState(defaultLayerOne)
    const [layerTwo, setLayerTwo] = useState(defaultLayerTwo)
    const directIndex = useRef(0)

    function mouseMoveEvent(event:any) {
        // console.log(event.pageX)
        if (event.pageX > directIndex.current) {
            setLayerOne({
                transform: `translate(${layerOne.current + 0.2}px)`,
                current: layerOne.current + 0.2,
                filter: `blur(${layerOne.blurContent + 0.21}px)`,
                blurContent: layerOne.blurContent + 0.21
            })

            setLayerTwo({
                transform: `translate(${layerTwo.current + 0.2}px)`,
                current: layerTwo.current + 0.2,
                filter: `blur(${layerTwo.blurContent - 0.21}px)`,
                blurContent: layerTwo.blurContent - 0.21

            })
        } else {
            setLayerOne({
                transform: `translate(${layerOne.current - 0.2}px)`,
                current: layerOne.current - 0.2,
                filter: `blur(${layerOne.blurContent - 0.21}px)`,
                blurContent: layerOne.blurContent - 0.21
            })

            setLayerTwo({
                transform: `translate(${layerTwo.current - 0.2}px)`,
                current: layerTwo.current - 0.2,
                filter: `blur(${layerTwo.blurContent + 0.21}px)`,
                blurContent: layerTwo.blurContent + 0.21
            }) 
        }
        
        directIndex.current = event.pageX
    }

    function mouseLeave (){
        setLayerOne(defaultLayerOne)
        setLayerTwo(defaultLayerTwo)
        directIndex.current = 0
    }

    return (
        <div className="header">
            <div className="fakebili-top-header">
                {/* 
                    左中右
                    
                    左边是导航item
                    中间是搜索条
                    右边也是导航item不过有个特务
                */}
                <ul className="nav-link-ul">
                    {
                        navLink.map((item) => {
                            return (<li key={item.name} className="nav-link-li">
                                {item.prefix ? `<i class="${item.prefix}"></i>` : ''}
                                {item.name}
                                {item.suffix ? `<i class="${item.suffix}"></i>` : ''}
                            </li>)
                        })
                    }
                </ul>

                <Search></Search>

                <div className="loginWrapper">
                    <Login></Login>
                    <Button className="postButton" type="primary">投稿</Button>
                </div>
            </div>
            
            <div className="bgWrapper" onMouseMove={mouseMoveEvent} onMouseLeave={mouseLeave}>
                <img className="bgImage layerBlur" src="/demo/layer.png" alt=""/>
                <img style={layerOne} className="bgImage" src="/demo/layer1.png" alt=""/>
                <img className="bgImage layerBlur" src="/demo/layer2.png" alt=""/>
                <img className="bgImage layerSlideBlur" src="/demo/layer3.png" alt=""/>
                <img style={layerTwo} className="bgImage layerBlur" src="/demo/layer4.png" alt=""/>
                <img className="bgImage layerBlur" src="/demo/layer5.png" alt=""/>
            </div>
        </div>
    )
}

export default Header