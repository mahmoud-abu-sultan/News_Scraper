import React from "react";
import { Link } from "react-router-dom";
// ----------
import single_1 from "../images/single_1.jpg";
import pic_1 from "../images/pic_1.jpg";
import pic_4 from "../images/pic_4.jpg";
import pic_5 from "../images/pic_5.jpg";
import pic_6 from "../images/pic_6.jpg";
import pic_7 from "../images/pic_7.jpg";

function Single(props) {
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
            <figure className="animate-box">
              <img src={single_1} alt="phot" className="img-responsive" />
            </figure>
            <span className="fh5co-meta animate-box">
              <Link to="/CategorieNews">{props.categori}</Link>
            </span>
            <h2 className="fh5co-article-title animate-box">
              My First Time Traveling in Vietnam
            </h2>
            <span className="fh5co-meta fh5co-date animate-box">
              March 6th, 2016
            </span>

            <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
              <div className="row">
                <div className="col-lg-8 cp-r animate-box">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large
                    <Link to="/Single">language</Link>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>

                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn’t listen.
                  </p>

                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>
                </div>
                <div className="col-lg-4 animate-box">
                  <div className="fh5co-highlight right">
                    <h4>Highlight</h4>
                    <p>
                      Separated they live in Bookmarksgrove right at the coast
                      of the Semantics, a large language ocean. A small river
                      named Duden flows by their place and supplies it with the
                      necessary regelialia
                    </p>
                  </div>
                </div>
              </div>

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

              <div className="row rp-b">
                <div className="col-lg-6 col-md-12 animate-box">
                  <figure>
                    <img
                      src={/* require("../images/pic_1.jpg")*/ pic_1}
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 cp-l animate-box">
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn’t listen.
                  </p>

                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>

                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large
                    <Link to="/Single">language</Link>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                </div>
              </div>

              <div className="row rp-b">
                <div className="col-lg-6 col-lg-push-6 col-md-12 col-md-push-0 animate-box">
                  <figure>
                    <img
                      src={pic_4}
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-lg-6 col-lg-pull-6 col-md-12 col-md-pull-0 cp-r animate-box">
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn’t listen.
                  </p>

                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>

                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large
                    <Link to="/Single">language</Link>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 animate-box">
                  <h2>Pointing has no control about the blind texts</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large
                    <Link to="/Single">language</Link>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>
                </div>
                <div className="col-md-4 animate-box">
                  <figure>
                    <img
                      src={pic_5}
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 animate-box">
                  <figure>
                    <img
                      src={pic_6}
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 animate-box">
                  <figure>
                    <img
                      src={pic_7}
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-12 animate-box">
                  <h2>Pointing has no control about the blind texts</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large
                    <Link to="/Single">language</Link> ocean. A small river
                    named Duden flows by their place and supplies it with the
                    necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Single;
