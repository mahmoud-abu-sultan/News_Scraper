import React from "react";
import Card from "./ArticleCard";
// import DataList from "../Data/DataListCard";
// ----------
import pic_1 from "../images/pic_1.jpg";
import pic_2 from "../images/pic_2.jpg";
import pic_3 from "../images/pic_3.jpg";
import pic_4 from "../images/pic_4.jpg";
import pic_5 from "../images/pic_5.jpg";
import pic_6 from "../images/pic_6.jpg";
import pic_7 from "../images/pic_7.jpg";
import pic_8 from "../images/pic_8.jpg";

function Home() {
  // const listCard = DataList.map((element) => {
  //   return (
  //     <Card
  //       key={element.id}
  //       imgPath={element.imagePath}
  //       categoris={element.categoris}
  //       articleTitle={element.articleTitle}
  //       element={element}
  //     />
  //   );
  // });
  return (
    // <!--  #container-fluid -->
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        {/* {listCard} */}
        <Card
          imgPath={pic_1}
          categoris="Food &amp; Drink"
          articleTitle="Boat Travel in The Vietnam River"
        />
        <Card
          imgPath={pic_2}
          categoris="Food &amp; Drink"
          articleTitle="Enjoying the Native Juice Drink in Brazil"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={pic_3}
          categoris="Travel,Style"
          articleTitle="A Modernize Huge and Beautiful Building"
        />
        <Card
          imgPath={pic_4}
          categoris="Photography"
          articleTitle="We Took A Photo"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath={pic_5}
          categoris="Photography"
          articleTitle="We Eat and Drink All Night"
        />
        <Card
          imgPath={pic_6}
          categoris="Travel,Style"
          articleTitle="A Wildlife In The Mountain of India"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={pic_7}
          categoris="Food &amp; Drink"
          articleTitle="An Overlooking River at the East Cost"
        />
        <Card
          imgPath={pic_8}
          categoris="Travel,Style"
          articleTitle="Beef Steak at Guatian Restaurant"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath={pic_1}
          categoris="Food &amp; Drink"
          articleTitle="Boat Travel in The Vietnam River"
        />
        <Card
          imgPath={pic_2}
          categoris="Food &amp; Drink"
          articleTitle="Enjoying the Native Juice Drink in Brazil"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={pic_3}
          categoris="Travel,Style"
          articleTitle="A Modernize Huge and Beautiful Building"
        />
        <Card
          imgPath={pic_4}
          categoris="Photography"
          articleTitle="We Took A Photo"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath={pic_5}
          categoris="Photography"
          articleTitle="We Eat and Drink All Night"
        />
        <Card
          imgPath={pic_6}
          categoris="Travel,Style"
          articleTitle="A Wildlife In The Mountain of India"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={pic_7}
          categoris="Food &amp; Drink"
          articleTitle="An Overlooking River at the East Cost"
        />
        <Card
          imgPath={pic_8}
          categoris="Travel,Style"
          articleTitle="Beef Steak at Guatian Restaurant"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
      </div>
    </div>
  );
}
export default Home;
