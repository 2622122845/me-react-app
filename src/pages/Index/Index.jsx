import React from 'react'

import MyCarousel from '../../components/Mycarousel'
import { carouselListData } from './assets/js/carousel-list-data'

import NavO from '../../components/NavO'
import { singleListData } from './assets/js/single-list-data.js'


import Card from '../../components/Card'
import { appListData } from './assets/js/app-list-data.js'

export default class Index extends React.Component {
    render() {
        console.log('我是Index', this, Object.assign({}, this.props));
        return (
            <div>
                <MyCarousel data={carouselListData} />
                <NavO {...this.props} data={singleListData} />
                <Card {...this.props} data={appListData} />
            </div>
        )
    }
}