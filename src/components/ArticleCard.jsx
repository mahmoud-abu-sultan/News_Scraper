import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
      <figure>
        <Link to="/Single">
          <img src={props.imgPath} alt="souvenir" className="img-responsive" />
        </Link>
      </figure>
      <span className="fh5co-meta">
        <Link to="/MainCategorieNews">{props.categoris}</Link>
      </span>
      <h2 className="fh5co-article-title" style={props.style}>
        {props.articleTitle}
      </h2>
      <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
    </article>
  );
}
export default Card;
