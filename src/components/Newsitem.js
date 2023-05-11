import React, { Component } from 'react'

const Newsitem = (props) => {

    let { title, description, imgurl, newsid, author, time, source } = props;
    return (
        <div className="card my-2 mx-auto"  >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "85%" }}>{source}
            </span>
            <img src={imgurl == null ? "https://cdn5.vectorstock.com/i/1000x1000/86/34/white-background-with-road-sign-error-oops-vector-16718634.jpg" : imgurl} className="card-img-top" alt="..." style={{ height: "13rem" }} />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <div className="text-primary my-2">-By <span className="text-secondary">{author ? author : "Unknown"} </span>on {new Date(time).toDateString()}</div>
                <a href={newsid} target="_blank" className="btn btn-dark">Read more</a>
            </div>
        </div>
    )
}

export default Newsitem
