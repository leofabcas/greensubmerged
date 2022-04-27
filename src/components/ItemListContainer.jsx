import React from 'react'

export default function ItemListContainer(props) {
    return (
        <div className='ItemListContainerStyle'>
            <div>
                <h6>{props.title}</h6>
                <p>{props.greeting}</p>
                <ul>
                    <li>BADC 2022</li>
                    <li>BADC 2021</li>
                    <li>BADC 2020</li>
                    <li>BADC 2019</li>
                    <li>BADC 2018</li>
                    <li>BADC 2017</li>
                </ul>
            </div>
            <div>
                <h6>{props.title}</h6>
                <ul>
                    <li>IAPLC 2022</li>
                    <li>IAPLC 2021</li>
                    <li>IAPLC 2020</li>
                    <li>IAPLC 2019</li>
                    <li>IAPLC 2018</li>
                    <li>IAPLC 2017</li>
                </ul>
            </div>
        </div>
    )
}
