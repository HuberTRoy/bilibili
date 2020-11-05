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

    let defaultLayerThree = {
        transform: 'translate(0px)',
        current: 0,
        filter: 'blur(6px)',
        blurContent: 5
    }

    const [layerOne, setLayerOne] = useState(defaultLayerOne)
    const [layerTwo, setLayerTwo] = useState(defaultLayerTwo)
    const [layerThree, setLayerThree] = useState(defaultLayerThree)
    const [leaveState, setLeaveState] = useState(false)
    const directIndex = useRef(0)

    const layOneTranslate = 0.18576324
    const layTwoTranslate = 0.18576324
    const layThreeTranslate = 0.477777
    const layOneBlur = 0.185763241
    const layTwoBlur = 0.185763241
    const layThreeBlur = 0.0123123

    function getLeftOrRightTranslateAndBlur(main:any, translateValue:number, blurValue:number, translateValueOp:string, blurValueOp:string) {
        let trans = translateValueOp === 'plus' ? (main.current + translateValue) : (main.current - translateValue)
        let blur = blurValueOp === 'plus' ? main.blurContent + blurValue : main.blurContent - blurValue

        if (blur > 10) {
            blur = 10
        }

        if (blur < -10) {
            blur = -10
        }

        return {
            transform: `translate(${trans}px)`,
            current: trans,
            filter: `blur(${blur}px)`,
            blurContent: blur
        }
    }

    function mouseMoveEvent(event:any) {
        // console.log(event.pageX)
        setLeaveState(false)
        if (event.pageX > directIndex.current) {
            setLayerOne(getLeftOrRightTranslateAndBlur(layerOne, layOneTranslate, layOneBlur, 'plus', 'plus'))

            setLayerTwo(getLeftOrRightTranslateAndBlur(layerTwo, layTwoTranslate, layTwoBlur, 'plus', 'minus'))

            setLayerThree(getLeftOrRightTranslateAndBlur(layerThree, layThreeTranslate, layThreeBlur, 'plus', 'minus'))
        } else {
            setLayerOne(getLeftOrRightTranslateAndBlur(layerOne, layOneTranslate, layOneBlur, 'minus', 'minus'))
            
            setLayerTwo(getLeftOrRightTranslateAndBlur(layerTwo, layTwoTranslate, layTwoBlur, 'minus', 'plus'))
        
            setLayerThree(getLeftOrRightTranslateAndBlur(layerThree, layThreeTranslate, layThreeBlur, 'minus', 'plus'))
        
        }
        
        directIndex.current = event.pageX
    }

    function mouseLeave (){
        setLayerOne(defaultLayerOne)
        setLayerTwo(defaultLayerTwo)
        setLayerThree(defaultLayerThree)
        setLeaveState(true)
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
                <img className="bgImage layerBlur" height="258" width="3096" src="/demo/layer.png" alt=""/>
                <img className={["bgImage", leaveState ? 'transitionState' : ''].join(' ')} style={layerOne} height="250" width="3000" src="/demo/layer1.png" alt=""/>
                <img className={["bgImage","layerBlur", leaveState ? 'transitionState' : ''].join(" ")} style={layerThree} height="155" width="1858" src="/demo/layer2.png" alt=""/>
                <img className={["bgImage", "three", leaveState ? 'transitionState' : ''].join(" ")} style={layerTwo} height="155" width="1858" src="/demo/layer3.png" alt=""/>
                <img className={["bgImage","layerBlur", leaveState ? 'transitionState' : ''].join(" ")} style={layerTwo} src="/demo/layer4.png" alt=""/>
                <img className={["bgImage","layerBlur", leaveState ? 'transitionState' : ''].join(" ")} style={layerThree} src="/demo/layer5.png" alt=""/>
            </div>
        </div>
    )
}

export default Header