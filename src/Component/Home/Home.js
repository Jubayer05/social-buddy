import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import "./Home.css";

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(response => response.json())
        .then (data => setPost(data));
    }, []);
    return (
        <div className="home-post">
            {
                post.map((post) => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;