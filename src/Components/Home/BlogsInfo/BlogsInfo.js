import React from 'react';

const BlogsInfo = ({blog}) => {
    return (
        <div className="col-md-4 col-sm-12">
        <div class="card p-5">
            <div className="d-flex mt-3">
                <img src={blog.authorImg} alt="authorImg" className="img-fluid me-2"/>
                <div className="testimonial-content">
                    <h4>{blog.author}</h4>
                    <h6>{blog.date}</h6>
                </div>
            </div>
            <h4 className="my-4">{blog.title}</h4>
            <p>{blog.description}</p>
        </div>
        </div>
    );
};

export default BlogsInfo;