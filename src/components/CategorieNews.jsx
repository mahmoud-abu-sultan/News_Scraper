import React from "react";
import { Link } from "react-router-dom";
import Card from "./ArticleCard";
// ----------
import single_1 from "../images/single_1.jpg";

function CategoriesNews(props) {
  const card_style = {
    fontSize: "34px ",
  };

  return (
    <div className="singlePage">
      <Link to="/" className="fh5co-post-prev">
        <span>
          <i className="icon-chevron-left"></i> Prev
        </span>
      </Link>

      <Link to="/single" className="fh5co-post-next">
        <span>
          Next <i className="icon-chevron-right"></i>
        </span>
      </Link>
      <div className="container-fluid">
        <div className="row fh5co-post-entry single-entry">
          <article className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
            <h3 className="fh5co-article-title animate-box">
              {props.categori}
              <h1>My First Time Traveling in Vietnam</h1>
            </h3>
          </article>
          <div
            className="row fh5co-post-entry"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Boat Travel in The Vietnam River"
              style={card_style}
            />
            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Enjoying the Native Juice Drink in Brazil"
              style={card_style}
            />
            <div className="clearfix visible-xs-block"></div>

            <Card
              imgPath={single_1}
              categoris="Travel,Style"
              articleTitle="A Modernize Huge and Beautiful Building"
              style={card_style}
            />
            <Card
              imgPath={single_1}
              categoris="Photography"
              articleTitle="We Took A Photo"
              style={card_style}
            />
            <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Boat Travel in The Vietnam River"
              style={card_style}
            />
            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Enjoying the Native Juice Drink in Brazil"
              style={card_style}
            />
            <div className="clearfix visible-xs-block"></div>

            <Card
              imgPath={single_1}
              categoris="Travel,Style"
              articleTitle="A Modernize Huge and Beautiful Building"
              style={card_style}
            />
            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Enjoying the Native Juice Drink in Brazil"
              style={card_style}
            />
            <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Boat Travel in The Vietnam River"
              style={card_style}
            />
            <Card
              imgPath={single_1}
              categoris="Food &amp; Drink"
              articleTitle="Enjoying the Native Juice Drink in Brazil"
              style={card_style}
            />
            <div className="clearfix visible-xs-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesNews;
