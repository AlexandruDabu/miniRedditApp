import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Outlet, NavLink} from 'react-router-dom';
import {setSearchTerm, setSelectedSubreddit} from '../features/postCard/PostsSlice'


function AppLayout() {

const [searchTermLocal, setSearchTermLocal] = useState('');
const searchTerm = useSelector((state) => state.reddit.searchTerm);
const dispatch = useDispatch();

const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
}

useEffect(() => {
    setSearchTermLocal(searchTerm)
},[searchTerm])

const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal))
}
    return (
        <>
        <header>
            <div className='logo'>
                <img className='img-logo'></img>
                <p>MiniReddit</p>
            </div>
                <form className='search' onSubmit={onSearchTermSubmit}>
                    <input type="text" placeholder='Search' onChange={onSearchTermChange} value={searchTermLocal}/>
                    <button type='submit' onClick={onSearchTermSubmit}><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
        </header>
        <Outlet/>
        </>
    )
}

export default AppLayout