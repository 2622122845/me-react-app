import React from 'react'
import { Carousel } from 'antd';

export default class MyCarousel extends React.Component {
    render() {
        console.log('我是MyCarousel', this)
        return (
            <div>
                <Carousel autoplay>
                    {
                        this.props.data.map((item,index) => {
                            return (
                                <div key={index}>
                                    <img src={item.img} alt="" width='100%' />
                                </div>
                            )
                        })
                    }

                </Carousel>
            </div>

        )
    }
}