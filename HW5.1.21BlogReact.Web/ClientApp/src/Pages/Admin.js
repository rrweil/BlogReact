import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Admin = () => {

    const [post, setPost] = useState({ title: '', content: '' });
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...post };
        copy[e.target.name] = e.target.value;
        setPost(copy);
    }

    const onSubmitPostClick = async () => {
        await axios.post('/api/blog/addPost', post);
        history.push('/');
    }

    const {title, content} = post;
    return (
        <>
                    <div className="row ">
                        <div className="col-md-8 offset-md-2 jumbotron mt-4 pt-3 pb-3">
                            <h2>Add New Post</h2>
                            <input type="text" className="form-control" placeholder="Title" name="title"
                                value={title} onChange={onTextChange}
                            />
                            <br />
                            <textarea name="content" placeholder="Enter content here..."
                                className="form-control" rows="20" value={content} onChange={onTextChange}>
                            </textarea>
                            <br />
                            <button className="btn btn-primary btn-block " onClick={onSubmitPostClick}>Submit Post!</button>
                        </div>
                    </div>
        </>

    );

}

export default Admin;