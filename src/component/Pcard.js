import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pcard({ item }) {

    const nav =useNavigate();

    return (
        <div className='Product' onClick={()=>nav(`/prodetail/${item.id}`)}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>{item.price}원</h4>
            {
                item.new ? <p className='new'>new!</p> : ""
            }
            <p className="size">SIZE</p>
            <ul>
                {
                    item.size.map((s, idx) => (
                        <li key={idx}>{s}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pcard
