import React from "react";

const NewsItem = (props) => {
  // const {source, imageUrl, title, author, date, desc, newsUrl, mode}=props
  return (
    <>
      <div className="card shadow-sm my-3">
        <div>
          <span className="d-flex justify-content-center position-absolute end-0 badge rounded-pill bg-danger">{props.source}</span>
        </div>
        <img
          src={
            !props.imageUrl
              ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/representational-image-021632807-16x9_0.jpg?VersionId=1u8314M1O_Lv8ugg6duOFNQUO8nfz596"
              : props.imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <small className="d-block text-muted">Author : {props.author}</small>
          <small className="d-block text-muted">Time : {props.date}</small>
          <p className="card-text">{props.desc}</p>
          <a rel="noreferrer" href={props.newsUrl} target="_blank" className={`btn btn-sm btn-${props.mode === "light" ? "dark" : "light"}`}>
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
