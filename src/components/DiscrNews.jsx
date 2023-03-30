import React from "react";
import { Link } from "react-router-dom";
// ----------
// import single_1 from "../images/single_1.jpg";

function DiscrNews() {
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
            {/* <figure className="animate-box">
              <img src={single_1} alt="phot" className="img-responsive" />
            </figure> */}
            <hr />
            <hr />
            <hr />
            <span className="fh5co-meta animate-box">
              <Link to="/Single">Travel</Link>
            </span>
            <h2 className="fh5co-article-title animate-box">
              <Link to="/Single">My First Time Traveling in Vietnam</Link>
            </h2>
            <span className="fh5co-meta fh5co-date animate-box">
              March 6th, 2016
            </span>

            <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
              <div className="row rp-b">
                <div className="col-md-12 animate-box">
                  <blockquote>
                    <p>
                      &ldquo;She packed her seven versalia, put her initial into
                      the belt and made herself on the way. When she reached the
                      first hills of the Italic Mountains, she had a last view
                      back on the skyline of her hometown Bookmarksgrove &rdquo;
                      <cite>&mdash; Jean Smith</cite>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default DiscrNews;
