import axios from 'axios';
import React from 'react';

const Comment = ({ comment }) => {
    const { commentorName, commentText, commentDate } = comment;
    return (
        <>
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body"> <h5 className="mt-0">{commentorName}
                    <small className="ml-1">{commentDate}</small>
                </h5>{commentText.split("\n").map(function (item) {
                        return (
                            <span>{item}<br /></span>
                        )
                    })}
                </div>
            </div>
        </>
    );

}

export default Comment;