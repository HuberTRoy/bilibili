import React from 'react'
import './main-nav.less'

interface bigNavItem {
    name: string,
    icon: string
}

interface tag {
    name: string,
    updateLabel: string
}

interface smallNavItem {
    name: string,
    icon: string
}

function MainNav() {
    const bigNav:Array<bigNavItem> = [
        {
            name: '主页',
            icon: '/demo/miao.webp'
        },
        {
            name: '动态',
            icon: '/demo/miao.webp'
        },
        {
            name: '排行榜',
            icon: '/demo/miao.webp'
        },
        {
            name: '频道',
            icon: '/demo/miao.webp'
        },
    ]

    const tagGroups:Array<tag> = [
        {
            name: '动画',
            updateLabel: '999+'
        },
        {
            name: '音乐',
            updateLabel: '999+'
        },
        {
            name: '舞蹈',
            updateLabel: '999+'
        },
        {
            name: '鬼畜',
            updateLabel: '999+'
        },
        {
            name: '知识',
            updateLabel: '999+'
        },
        {
            name: '生活',
            updateLabel: '999+'
        },
        {
            name: '时尚',
            updateLabel: '999+'
        },
        {
            name: '说唱',
            updateLabel: '999+'
        },
        {
            name: '动物',
            updateLabel: '999+'
        },
        {
            name: '单机游戏',
            updateLabel: '999+'
        },
        {
            name: '番剧',
            updateLabel: '999+'
        },
        {
            name: '娱乐',
            updateLabel: '999+'
        },
        {
            name: '放映厅',
            updateLabel: '999+'
        }
    ]

    const smallNavItem:Array<smallNavItem> = [
        {
            name: '小黑屋',
            icon: '/demo/miao.webp'
        },
        {
            name: '小黑房',
            icon: '/demo/miao.webp'
        },
        {
            name: '小黑盒',
            icon: '/demo/miao.webp'
        },
        {
            name: '小黑袋',
            icon: '/demo/miao.webp'
        },
        {
            name: '小小黑',
            icon: '/demo/miao.webp'
        },
        {
            name: '小黑特务',
            icon: '/demo/miao.webp'
        }
    ]

    return (
        // 分为上下，上面左中右各不同。
        // 下面左边是轮播右面是视频缩略图
        <div className="base-wrap main-nav">
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
                                <div key={item.name} className="big-nav-item">
                                    <img src={item.icon} alt=""/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                
                <span className="separator"></span>

                <div className="tag-group">
                    {/* 这边要换行 
                        name <label update time>
                    */}
                    {
                        tagGroups.map((item) => {
                            return (
                                <div key={item.name} className="tag-group-item">
                                    <span className="tag-group-item__name">{ item.name }</span>
                                    <span className="tag-group-item__label">{ item.updateLabel }</span>
                                </div>
                            )
                        })
                    }
                </div>
                
                <span className="separator"></span>
                
                <div className="small-nav">
                    {/* 两行 */}
                    {
                        smallNavItem.map((item) => {
                            return (
                                <div key={item.name} className="small-nav-item">
                                    <img src={ item.icon } alt=""/>
                                    <span className="small-nav-item__name">{ item.name }</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="main-nav-bottom">

            </div>
        </div>
    )
}

export default MainNav