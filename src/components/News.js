import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(async () => {
    props.setProgress(30);
    document.title = `${capitalize(props.category)} News - NewsPulse`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
    /* eslint-disable-next-line padded-blocks */
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${
      props.pageSize
    }&page=${page + 1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setLoading(false);
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h3 className="fs-4 my-3">NewsPulse - Top {capitalize(props.category)} Headlines</h3>
        {loading && <Loading />}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}>
          <div className="row my-3 mx-2">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    source={element.source.name}
                    author={element.author ? element.author : "Unkonwn"}
                    date={new Date(element.publishedAt).toGMTString()}
                    desc={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    mode="light"
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
