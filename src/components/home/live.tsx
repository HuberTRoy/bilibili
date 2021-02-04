import React from 'react'
import Card from '@/components/card/card'
import './live.less'

function Live() {
    return (
        <div className="base-wrap live">
            {/* 这个其实可以抽象成一个更抽象的模块，因为接下来有很多部分不同的组件。 */}

            {/* 也是一个左右结构，左边通常是header + 宫格右边是推广有很多可能*/}


            <div className="live-left">
                <div className="live-left-header">
                    <i>
                        {/* icon */}
                    </i>
                    <img src="/demo/demo.webp" alt=""/>


                    <span className="live-left-title">正在直播</span>
                    <span className="live-left-brumb">当前直播9998个</span>
                </div>

                <div className="live-left-content">
                    {/* 
                        这里应该是一系列的Card，常规情况应该是一个循环，这里直接模拟一下各种不同的card，
                        card和header是本次tiny项目的核心，主要为了练手。
                    */}

                    <Card></Card>
                </div>
            </div>

            {/* 这一部分不打算写了 */}
            <div className="live-right">
            </div>
        </div>
    )
}

export default Live