import React, { useState } from 'react';
import './home.less'
import '@/style/base.less'

// 感觉这个地方也可以做懒加载。
import Header from '@/components/home/header'
import MainNav from '@/components/home/main-nav'
import FirstScreen from '@/components/home/first-screen'
import Live from '@/components/home/live'

interface sortableType {
    [index: string]: React.ElementType

}

const sortable:sortableType = {
    'header': Header,
    'mainNav': MainNav,
    'firstScreen': FirstScreen,
    'live': Live
}

function Home() {
    // B站首页整体是上下结构
    // 左右有一定留白。
    // 基础可用flex: column
    // 同时右边会有一个导航条，fixed，每一块mutation时判断与顶点的距离然后指到对应的块上。
    // 这些模块可排序。

    let defaultComponents:string[] = Object.keys(sortable)

    let [components, setComponents] = useState(defaultComponents)

    return (
        <div className="home">
            { components.map((item) => {
                
                let Component = sortable[item]

                return <Component key={item}/>
             }) }
        </div>
    )
}

export default Home;
