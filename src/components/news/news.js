import React from "react";
import { useSelector } from "react-redux";

const News = () => {
  const data = useSelector(state => state.news.news);
  return (
    <div className="infoBlock">
      <div className="blockTitle">
        <h1>RECENT NEWS</h1>
      </div>
      {data.map(result => (
        <div key={result.id} className="newsRow">
          <div>
            <a href={result.url}>{result.title}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
