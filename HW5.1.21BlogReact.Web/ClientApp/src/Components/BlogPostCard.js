import React from 'react';

const BlogPostCard = ({post}) => {
    const {title, content, postDate} = post;
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">
                        <a href="/home/viewpost?id=@bp.Id">{title}</a>
                    </h2>
                    <p className="card-text">BLOG TEXT CHOPPED TO 200 CHARACTERS {content}</p>
                    <div className="mb-3"><small>XXX comment(s)</small></div>
                    <a href="/home/viewpost?id=@bp.Id" className="btn btn-primary">Read More LINKED &rarr;</a>
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



