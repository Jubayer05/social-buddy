import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import "./PostDetail.css";

const PostDetail = () => {
    const [postDetail, setpostDetail] = useState({})
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setpostDetail(data));
    }, []);
    // Comments
    const [comments, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data));
    }, [])
    
    const [view, setView] = useState(false)
    return (
        <div className="post-detail">
            <h1 className="detail-heading">User Id: {postDetail.id}</h1>
            <h2>{postDetail.title}</h2>
            <p>{postDetail.body}</p>
            <button onClick={() => setView(!view)} className="comment_btn">{view === true ? <span className="hide">Hide Comment <FontAwesomeIcon icon={faChevronUp} /></span>: <span className="view">View Comment <FontAwesomeIcon icon={faChevronDown} /></span>}</button>
            { view === true &&
                comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
            }
            
        </div>
    );
};

export default PostDetail;