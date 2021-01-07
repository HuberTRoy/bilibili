import React from 'react'

function Live() {
    return (
        <div className="live">
            {/* 这个其实可以抽象成一个更抽象的模块，因为接下来有很多部分不同的组件。 */}

            {/* 也是一个左右结构，左边通常是header + 宫格右边是推广有很多可能*/}


            <div className="live-header">
                <i>
                    {/* icon */}
                </i>
                <span>正在直播</span>
                <span>当前直播9998个</span>
            </div>
        </div>
    )
}

export default Live