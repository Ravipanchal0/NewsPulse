import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, mode, author, date } = this.props;
    return (
      <>
        <div className="card shadow-sm my-3">
          <img
            src={
              !imageUrl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/representational-image-021632807-16x9_0.jpg?VersionId=1u8314M1O_Lv8ugg6duOFNQUO8nfz596"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <small className="d-block text-muted">Author : {author}</small>
            <small className="d-block text-muted">Time : {date}</small>
            <p className="card-text">{desc}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode === "light" ? "dark" : "light"}`}>
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
