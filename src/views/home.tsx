import React from 'react';

import Header from '@/components/home/header'

function Home() {
    // B站首页整体是上下结构
    // 左右有一定留白。
    // 基础可用flex: column
    // 同时右边会有一个导航条，fixed，每一块mutation时判断与顶点的距离然后指到对应的块上。
    // 这些模块可排序。
    return (
        <div className="home">
            <Header></Header>
        </div>
    )
}

export default Home;
