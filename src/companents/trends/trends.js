// import React, { Component } from 'react'
// export default class trends extends Component {

import React from 'react'
import './trends.css'
const trends = ({ data }) => {
    return (
        <div className='wropperr'>
            <div className='trends'>
                <div className='trends__item'>
                    <div className='info'>
                        <strong>Today’s trends</strong>
                        <p>as of 25 May 2019, 09:41 PM</p>
                    </div>
                    <div className='days'>
                        <div className='todoy'>
                            <p>Todoy</p>
                        </div>
                        <div className='yesterday'>
                            <span></span>
                            <p>Yesteray</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {data.map(item => (
                            <div className='trend__info' key={item.id}>
                                <p>{item.text}</p>
                                <span>{item.number}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default trends;
