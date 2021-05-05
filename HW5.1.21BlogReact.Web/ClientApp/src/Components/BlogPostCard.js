import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';



const BlogPostCard = ({ post }) => {

    const { title, content, datePosted, id, comments } = post;
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/postpage/${id}`}>
                            {title}
                        </Link>
                    </h2>
                    <p className="card-text">
                        {content.length < 200 ? content : `${content.substring(0, 200)}...`}
                    </p>
                    <div className="mb-3"><small>{comments.length} comment(s)</small></div>
                    <Link to={`/postpage/${id}`}>
                        <button className="btn btn-primary">Read More &rarr;</button>
                    </Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on {format(new Date(datePosted), 'cccc MMMM Lo, yyyy')}
                </div>
            </div>
        </>
    );


}

export default BlogPostCard;



