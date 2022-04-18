import React from 'react';

const TodoSearch = ({page,size,keyword,type}) => {

    console.log("TodoSearch...........")
    console.log(page,size,keyword,type)

    return (
        <div>
            <select>

            </select>
            <input type='text'/>
            <button>Search</button>
        </div>
    );
};

export default TodoSearch;