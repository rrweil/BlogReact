import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import BlogPostCard from '../Components/BlogPostCard';
import { post } from 'jquery';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();


    useEffect(() => {
        const getPosts = async () => {
            const {data} = await axios.get('/api/blog/getposts');
            setPosts(data);
        }
        getPosts();
    }, []);



    // const onTextChange = e => {
    //     const copy = { ...post };
    //     copy[e.target.name] = e.target.value;
    //     setPost(copy);
    // }

    // const onSubmitPostClick = async () => {
    //     await axios.post('/api/blog/addpost', post);
    //     history.push('/');
    // }

    const { title, content } = post;
    return (
        <>
            <div className="container pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="my-4">
                                My Blog
                        <small className="ml-2">Subheading goes here</small>
                            </h1>

                            {posts.map(post => {
                                return (
                                    <BlogPostCard
                                        post={post}
                                        key={post.id}

                                    />
                                )
                            })
                            }
                            <ul className="pagination justify-content-center mb-4">
                                <li className="page-item">
                                    <a className="page-link" href="/home/index?page=2">&larr; Older</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Home;