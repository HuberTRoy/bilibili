import React, { useState } from 'react';
import './home.less'

import Header from '@/components/home/header'
import MainNav from '@/components/home/main-nav'

interface sortableType {
    [index: string]: React.ElementType

}

const sortable:sortableType = {
    'header': Header,
    'mainNav': MainNav
}

function Home() {
    // B站首页整体是上下结构
    // 左右有一定留白。
    // 基础可用flex: column
    // 同时右边会有一个导航条，fixed，每一块mutation时判断与顶点的距离然后指到对应的块上。
    // 这些模块可排序。

    let defaultComponents:string[] = ['header', 'mainNav']

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
