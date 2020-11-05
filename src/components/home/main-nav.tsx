import React from 'react'

interface bigNavItem {
    name: string,
    icon: string
}

function MainNav() {
    const bigNav:Array<bigNavItem> = [
        {
            name: '主页',
            icon: '//i1.hdslb.com/bfs/face/1d6f100b921c9b48914eda8f3b37e76ba9ef4ca5.jpg@54w_54h_1c_100q.webp'
        },
        {
            name: '动态',
            icon: '//i1.hdslb.com/bfs/face/1d6f100b921c9b48914eda8f3b37e76ba9ef4ca5.jpg@54w_54h_1c_100q.webp'
        },
        {
            name: '排行榜',
            icon: '//i1.hdslb.com/bfs/face/1d6f100b921c9b48914eda8f3b37e76ba9ef4ca5.jpg@54w_54h_1c_100q.webp'
        },
        {
            name: '频道',
            icon: '//i1.hdslb.com/bfs/face/1d6f100b921c9b48914eda8f3b37e76ba9ef4ca5.jpg@54w_54h_1c_100q.webp'
        },
    ]
    return (
        // 分为上下，上面左中右各不同。
        // 下面左边是轮播右面是视频缩略图
        <div className="main-nav">
            {/* 上下布局 */}
            <div className="main-nav-top">
                {/* 这里是横向布局 */}
                <div className="big-nav">
                    {/* 
                        一行四个 
                        上面图标下面是内容
                    */}
                    {
                        bigNav.map((item) => {

                            return (
                                <div className="big-nav-item">
                                    <img src={item.icon} alt=""/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="tag-group">
                    {/* 这边要换行 */}
                </div>

                <div className="small-nav">
                    {/* 两行 */}
                </div>
            </div>

            <div className="main-nav-bottom">

            </div>
        </div>
    )
}

export default MainNav