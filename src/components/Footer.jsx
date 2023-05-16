import React from "react";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    // <!--  #fh5co-footer -->
    <footer id="fh5co-footer">
      <p>
        <small>
          &copy; {year}. GoalSports News. <br />
          Designed by &nbsp;
          <a
            href="https://github.com/engahmadnahal/NewsScrapReact"
            target="_blank"
            rel="noopener noreferrer"
          >
            framtíðin Team
          </a>
          &nbsp; The News Sources:&nbsp;
          <a
            href="https://www.beinsports.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BeinSports
          </a>
        </small>
      </p>
    </footer>
  );
}
export default Footer;
