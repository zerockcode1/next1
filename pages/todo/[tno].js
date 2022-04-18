import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then(res => {
    console.log(res.data)
    return res.data
})

const TodoRead = () => {

    const router = useRouter()
    const {tno, page, size} = router.query

    console.log(tno)

    const { data, error } = useSWR(`http://localhost:8080/guest/todo/${tno}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <h1>{tno}</h1>
            <h2>{data.title}</h2>
            <h2>{data.writer}</h2>
            <h2>{data.dueDate}</h2>

            <Link href={{pathname:'/todo/todoList', query:{page,size}}}>
                <a>LIST</a>
            </Link>


        </div>
    );
};

export default TodoRead;