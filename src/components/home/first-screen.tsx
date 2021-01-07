import React, { useState } from 'react'
import { Carousel, Divider } from 'antd';

import './first-screen.less'

interface chunk {
    id: number,
    image: string,
    link: string 
}


function FirstScreen () {

    let defaultCarousel:Array<chunk> = new Array(5).fill(
        {
            image: '/demo/carousel-demo.jpg',
            link: '',
            id: +new Date()+Math.random()
        }
    )

    let defaultRecommend:Array<chunk> = new Array(8).fill(
        {
            image: '/demo/carousel-demo.jpg',
            link: '',
            id: +new Date()+Math.random()
        }
    )

    let [carousel, setCarousel] = useState(defaultCarousel)
    let [recommend, setRecommend] = useState(defaultRecommend)

    return (
        <div className="base-wrap first-screen">
            {/* 
                这个结构相对简单：
                左右结构，
                左边是个轮播，右边一个简单的宫格。
            */}

            <Carousel>
                {
                    carousel.map((item) => {
                        return (
                            <div className="carousel-item" key={item.id}>
                                <img src={item.image} alt="" className="carouse-item__image" />
                            </div>
                        )
                    })
                }
            </Carousel>
            
            <div className="recommend-box">
                {
                    recommend.map((item) => {
                        return (
                            <div className="recommend-box-item" key={item.id}>
                                <img src={item.image} alt="" className="recommend-box-item__image"/>
                            </div>
                        )
                    }) 
                }
            </div>

        </div>
    )
}

export default FirstScreen