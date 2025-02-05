import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Prodetail() {
    const params = useParams();
    //params={id:1,}
    const list = useSelector(state => state.List.list)
    const filtered = list.filter(item => {
        return item.id == params.id;
    });
    const [size,setSize]=useState("S");
    const [count,setCount]=useState(1);
    return (
        <div className='prodetail'>
            <div className="i_l">
                <img src={filtered[0]?.img} alt={filtered[0]?.title} />
            </div>
            <div className="i_r">

                <h2>{filtered[0]?.title}</h2>
                <h3>₩ {filtered[0]?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <p><span>SIZE :</span>{size}</p>
                <div className="s_button">
                    {
                        filtered[0]?.size.map((s,idx)=>{
                            return(
                                <button key={idx} type="button" className={size===s ? "active" : ''} onClick={()=>setSize(s)}>{s}</button>
                            )
                        })
                    }
                </div>

                <div className="num">
                    <p><span>수량 :</span>{count}</p>

                    <div className="btnbox">
                        <button type="button" onClick={()=>{if(count>0){setCount(prev=>prev-1)}}}>-</button>
                        <p>{count}</p>
                        <button type="button" onClick={()=>setCount(prev=>prev+1)}>+</button>
                    </div>
                </div>

                <div className="price">
                    <p><span>Total Price :</span>₩ {(filtered[0]?.price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>

                <div className="purchase">
                    <button type="button">장바구니에 담기</button>
                    <button type="button">구매</button>
                </div>


            </div>
        </div>
    )
}

export default Prodetail
