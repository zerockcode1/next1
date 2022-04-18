import React from 'react';
import axios from "axios";
import useSWR from "swr";
import { useRouter } from 'next/router';
import Link from 'next/link';

import ListPaging from "../../components/ListPaging";
import TodoSearch from "../../components/todo/TodoSearch";

const fetcher = (obj) => axios.get(obj.url, {params: obj.param}).then(res => {
    console.log(res.data)
    return res.data
})

const initData = {
    page:1,
    size:10,
    type:'',
    keyword:''
}

const TodoList = () => {

    const router = useRouter();
    const param = router.query || initData;

    const { data, error } = useSWR({url:'http://localhost:8080/guest/todo/list', param:param}, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const todoList = data.dtoList.map(todo => {
        return(
            <li key={todo.tno}>
                <Link href={{pathname:`/todo/${todo.tno}`, query:{page:data.page, size:data.size}}}>
                    <a>{todo.title}</a>
                </Link>
            </li>
        )
    })

    return (
        <div>
            <TodoSearch {...data}></TodoSearch>
            <ul>
                {todoList}
            </ul>
            <div>
                <ListPaging {...data}></ListPaging>
            </div>
        </div>
    );
};



export default TodoList;