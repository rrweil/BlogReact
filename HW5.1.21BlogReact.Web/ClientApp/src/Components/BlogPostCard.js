import React from 'react';
import { Link } from 'react-router-dom';


const BlogPostCard = ({ post }) => {

    const generateContent = () => {
        if (content.length < 200){
            return content;
        } else {
            return `${content.substring(0, 200)}...`
        }
    }

    const { title, content, postDate, id, comments} = post;
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to ={`/postpage/${id}`}>
                            {title}
                        </Link>
                    </h2>
                    <p className="card-text">
                    {generateContent()}
                    </p>
                    <div className="mb-3"><small>{comments.length} comment(s)</small></div>
                    <Link to ={`/postpage/${id}`}>
                    <button className="btn btn-primary">Read More &rarr;</button>
                    </Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on {postDate} by
                    <a href="#" className="ml-1">Anonymous</a>
                </div>
            </div>
        </>
    );


}

export default BlogPostCard;



