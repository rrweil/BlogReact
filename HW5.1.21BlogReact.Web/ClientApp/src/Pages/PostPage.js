import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import Comment from '../Components/Comment';

const PostPage = () => {

    const [post, setPost] = useState({ id: '', title: '', content: '', datePosted: '', comments: [] });
    const [comment, setComment] = useState({ commentorName: '', commentText: '', postId: '' });
    const [newComment, setNewComment] = useState(false);
    const params = useParams();


    useEffect(() => {
        const getPostById = async () => {
            const { id } = params;
            const { data } = await axios.get(`/api/blog/getpostbyid?id=${id}`);
            setPost(data);
        }
        getPostById();
    }, []);

    const OnCommentTextChange = e => {
        const copy = { ...comment };
        copy[e.target.name] = e.target.value;
        setComment(copy);
    }


    useEffect(() => {
        setNewComment(false);
        const getPostById = async () => {
            const { id } = params;
            const { data } = await axios.get(`/api/blog/getpostbyid?id=${id}`);
            setPost(data);
        }
        getPostById();
    }, [newComment]);

    const onSubmitCommentClick = async () => {
        await axios.post('/api/blog/addComment', { commentorName, commentText, postId: params.id });
        setNewComment(true);
        setComment({ commentorName: '', commentText: '', postId: '' });
    }


    const { title, content, datePosted, comments } = post;
    const { commentorName, commentText } = comment;
    var date = new Date(datePosted).toLocaleString();
    return (
        <div className="row">
            <div className="col-lg-8">
                <h1 className="mt-4">{title}</h1>
                <p className="lead">by Anonymous</p>
                <hr />
                <p>Posted on {date}</p>
                {/* <p>Posted on {format(new Date(datePosted), 'yyyy')}</p> */}

                <hr />
                <div className="display-field">
                    {content.split("\n").map(function (item) {
                        return (
                            <span>{item}<br /></span>
                        )
                    })}
                </div>
                <hr />
                <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" name="commentorName" onChange={OnCommentTextChange} value={commentorName} />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Comment" name="commentText" className="form-control" rows="3" onChange={OnCommentTextChange} value={commentText}></textarea>
                        </div>
                        <button id="submit" disabled={commentorName == 0 || commentText == 0} className="btn btn-primary" onClick={onSubmitCommentClick}>Submit</button>
                    </div>
                </div>
                <div>
                    {comments.map(comment => {
                        return (
                            <Comment
                                comment={comment}
                                key={comment.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>);
}

export default PostPage;