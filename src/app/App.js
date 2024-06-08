import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import AppLayout from './AppLayout';
import Posts from '../features/postCard/Posts';
import SubReddits from '../features/subReddits/SubReddits';
import PostCard from './components/PostCard';


export default function App() {
    return (
        <>
        <AppLayout/>
        <main>
            <Posts/>
        </main>
        <aside>
            <SubReddits/>
        </aside>
        </>
    )
}