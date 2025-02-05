import React from 'react'
import Cate from '../component/Cate'
import Pcard from '../component/Pcard';
import { useSelector } from 'react-redux';

function Contents() {
    let { list, status, search,search_cate } = useSelector(state => state.List);

    list=list.filter(item=>item.title.includes(search)).filter(item=>item.cate.includes(search_cate));

    return (
        <div>
            <Cate />
            <div className="contents">
                {
                    list.map((item, idx) => {
                        return <Pcard key={idx} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Contents
