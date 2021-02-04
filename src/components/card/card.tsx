import React from 'react'
import './card.less'

function Card(props:any) {
    return (
        <div className="card">
            {/* 
                这个是根据不同的live渲染的不同的card：

                    data必须对应。

                    基本状态是
                    一个img

                    img 下边是一组图标和数据
            */}

            <div className="card-img-wrapper">
                <img src="/demo/demo.webp" alt=""/>
            </div>

            <div className="card-info">
                <img src="/demo/demo.webp" alt=""/>

                <div className="card-info-author">
                    <p className="card-info-author-name">
                        吸喵~
                    </p>
                    <p className="card-info-author-desc">
                        吸喵吸喵吸喵吸喵吸喵吸喵吸喵~
                    </p>
                    <p className="card-info-author-tag">
                        吸喵主播
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card