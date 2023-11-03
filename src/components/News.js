import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalarticle: 0,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8aff7b2ebb04b649f618ae434b8d759&pageSize=12&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalarticle: parseData.totalResults });
  }
  previousPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8aff7b2ebb04b649f618ae434b8d759&pageSize=12&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  nextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8aff7b2ebb04b649f618ae434b8d759&pageSize=12&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
    });
  };
  render() {
    return (
      <div className="container my-3 py-3">
        <h3 className="fs-4 my-3">NewsPulse - Top Headlines</h3>

        <div className="row my-3 mx-2">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  desc={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousPage}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalarticle / 12)}
            type="button"
            className="btn btn-dark"
            onClick={this.nextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
