import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import BlogPostCard from '../Components/BlogPostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [pageCounter, setPageCounter] = useState({ postsPerPage: 3, totalPages: '', lastPage: '' });
    let { pageNum } = useParams();
    const { postsPerPage, totalPages, lastPage } = pageCounter;

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get('/api/blog/getposts');
            setPosts(data);
            const totalPages = data.length / postsPerPage;
            setPageCounter({ ...pageCounter, totalPages, lastPage: totalPages % 1 == 0 ? totalPages - 1 : Math.floor(totalPages) });
        }
        getPosts();
    }, []);

    const generatePageNumberButtons = () => {
        if (pageNum == 0 && totalPages > 1) {
            return (
                <ul className="pagination justify-content-center mb-4">
                    <Link to={`/page/${+pageNum + 1}`}>
                        <li className="page-item"><button className="page-link" >← Older</button></li>
                    </Link>
                </ul>
            )
        } else if (pageNum == 0) {
            return (<></>);
        } else if (pageNum == lastPage) {
            return (
                <ul className="pagination justify-content-center mb-4">
                    <Link to={`/page/${+pageNum - 1}`}>
                        <li className="page-item"><button className="page-link">Newer →</button></li>
                    </Link>
                </ul>
            )
        } else {
            return (
                <ul className="pagination justify-content-center mb-4">
                    <Link to={`/page/${+pageNum + 1}`}>
                        <li className="page-item"><button className="page-link" >← Older</button></li>
                    </Link>
                    <Link to={`/page/${+pageNum - 1}`}>
                        <li className="page-item"><button className="page-link">Newer →</button></li>
                    </Link>
                </ul>
            )
        }
    }

    const generateBlogCards = () => {

        var startingPost = pageNum * postsPerPage;
        var filteredPosts = posts.slice(startingPost, startingPost + postsPerPage);

        return (
            filteredPosts.map(post => {
                return (
                    <BlogPostCard
                        post={post}
                        key={post.id}
                    />
                )
            })
        );
    }

    return (
        <div className="container pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="my-4">
                            My Blog
                        <small className="ml-2">Subheading goes here</small>
                        </h1>
                        {generateBlogCards()}
                        {generatePageNumberButtons()}
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Home;