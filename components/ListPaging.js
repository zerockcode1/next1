import React from 'react';
import {range} from 'lodash'
import Link from 'next/link';

const ListPaging = ({page,size,start,end,prev,next}) => {


    const pageNums = range(start,end + 1)

    const pageLi = pageNums.map(num => {
        return (
            <li key={num}>
                <Link href={`/todo/todoList?page=${num}`}>
                    <a>{num}</a>
                </Link>
            </li>
        )
    })


    return (
        <div>
            <ul style={{display:'flex', backgroundColor:'green', listStyle:'none'}}>
                {prev ? <li>Prev</li>: <></>}
                {pageLi}
                {next ? <li>Next</li>: <></>}
            </ul>
        </div>
    );
};

export default ListPaging;