import React from 'react';
import useSWR from 'swr'
import axios from "axios";


const fetcher = url => axios.get(url).then(res => {
    console.log(res.data)
    return res.data
})

const MovieList = () => {

    const { data, error } = useSWR('http://localhost:8080/guest/movies', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const list = data.map(movie => <li key={movie.mno}> {movie.title}</li>)

    return (
        <div>
            <ul>
                {list}
            </ul>

        </div>
    );
};

export default MovieList;