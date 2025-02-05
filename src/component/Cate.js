import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchtext,searchCate } from '../redux/reducer/listslice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Cate() {

    const product = useSelector(state => state.List.list);
    const cate = product.reduce((prev, now) => {
        return prev.includes(now.cate) ? prev : [...prev, now.cate];
    }, ["All"])

    const [inputtext, setInputtext] = useState("");
    const dispatch = useDispatch();

    const enter = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    const search = () => {
        dispatch(searchtext(inputtext));
    }

    const searchCategory = (category)=>{
        dispatch(searchCate(category));
    }

    return (
        <div className='cate'>
            <ul>
                {
                    cate.map((item, idx) => {
                        return <li key={idx} 
                        onClick={()=>searchCategory(item==="All"? "" : item)}>{item}</li>
                    })
                }
            </ul>
            <div className="inputbox">
                <input type="text" onChange={(e) => setInputtext(e.target.value)} onKeyDown={(e) => enter(e)} />
                <button type='button' onClick={search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    )
}

export default Cate
