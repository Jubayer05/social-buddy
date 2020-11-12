import React, { useEffect, useState } from 'react';
import "./Comments.css";

const Comments = (props) => {
    const {id, name, email, body} = props.comment;
    let image = `https://randomuser.me/api/portraits/men/${id}.jpg`;
    if (id % 2 !== 1) {
        image = `https://randomuser.me/api/portraits/women/${id}.jpg`;
    }
    return (
        <div className="comment">
            <img src={image} alt=""/>
            <div className="comment_detail">
                <h2>Id: {id}</h2>
                <h4>Name: {name}</h4>
                <h5>Email: {email}</h5>
                <p>Comment: {body}</p>
            </div>
        </div>
    );
};
export default Comments;