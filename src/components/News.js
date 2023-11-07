import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
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
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8aff7b2ebb04b649f618ae434b8d759&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      loading: false,
      articles: parseData.articles,
      totalarticle: parseData.totalResults,
    });
  }
  previousPage = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=d8aff7b2ebb04b649f618ae434b8d759&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  nextPage = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=d8aff7b2ebb04b649f618ae434b8d759&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      loading: false,
      articles: parseData.articles,
      page: this.state.page + 1,
    });
  };
  render() {
    let { mode } = this.props;
    return (
      <div className="container my-3 py-3">
        <h3 className="fs-4 my-3">NewsPulse - Top Headlines</h3>
        <div className="row my-3 mx-2">
          {this.state.loading && <Loading />}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  author={element.author ? element.author : "Unkonwn"}
                  date={element.publishedAt}
                  desc={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  mode={mode}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
            onClick={this.previousPage}
          >
            &larr; Previous
          </button>
          <div className="px-3 py-2 bg-secondary text-white">{this.state.page}</div>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalarticle / 12)}
            type="button"
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
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
