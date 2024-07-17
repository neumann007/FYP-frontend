import "./Home.css";
import React from "react";
import image1 from "./images/carosel 1.jpg";
import image2 from "./images/carosel 2.jpg";
import image3 from "./images/carosel 3.jpg";
import image4 from "./images/carosel 4.jpg";
import image5 from "./images/carosel 5.jpg";
import Layout from "../Shared/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div id="faded_back">
        <div
          className="container"
          style={{ background: "white", zIndex: "2", marginBottom: "5%", borderRadius: "5px" }}
        >
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block w-100"
                  alt="..."
                  id="crsl_img"
                />
                <div id="baby">
                  <div id="inner">
                    <h1 id="pain_relief"> Affordable Pain Relief</h1>
                    <div id="pain_content">
                      {" "}
                      Are aches and pains causing you discomfort? We <br />
                      know how challenging that can be, which is why we're{" "}
                      <br />
                      here to offer assistance.{" "}
                    </div>
                    <div id="shop"> Shop Now</div>
                  </div>
                </div>
              </div>
              {/* <!-- </div> --> */}
              <div className="carousel-item">
                <img
                  src={image2}
                  className="d-block w-100"
                  alt="..."
                  id="crsl_img"
                />
                <div id="baby1">
                  <div id="inner1">
                    <h1 id="pain_relief1"> Need an Energy Boost? </h1>
                    <div id="pain_content1">
                      {" "}
                      Feeling a bit lethargic? Rest assured, we offer a <br />
                      selection of our popular energy-boosting products <br />
                      to revitalize you.{" "}
                    </div>
                    <div id="shop1"> Shop Now</div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={image3}
                  className="d-block w-100"
                  alt="..."
                  id="crsl_img"
                />
                <div id="baby">
                  <div id="inner">
                    <h1 id="pain_relief"> Treat Your Pets Today </h1>
                    <div id="pain_content">
                      {" "}
                      Are you ready to spoil your fluffly comparison? Don't{" "}
                      <br />
                      fret-we've got your pet pampering needs
                      <br />
                      covered,from toys and leashes to tasty treats .{" "}
                    </div>
                    <div id="shop"> Shop Now</div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={image4}
                  className="d-block w-100"
                  alt="..."
                  id="crsl_img"
                />
                <div id="baby1">
                  <div id="inner1">
                    <h1 id="pain_relief1"> Fun in the Sun</h1>
                    <div id="pain_content1">
                      {" "}
                      Summer has arrived,bringing along it's buddy, <br />
                      sunburn! Dive into our collection of top-rated
                      <br />
                      Neutrogena goodies to gear up for a sizzling summer <br />
                      ahead.{" "}
                    </div>
                    <div id="shop1"> Shop Now</div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={image5}
                  className="d-block w-100"
                  alt="..."
                  id="crsl_img"
                />
                <div id="baby">
                  <div id="inner">
                    <h1 id="pain_relief"> Unlock Your Potential</h1>
                    <div id="pain_content">
                      {" "}
                      Are you tired of feeling sluggish and run down? Do <br />
                      you struggle to get the nutrients you need from your{" "}
                      <br /> diet alone? Introducing the ultimate food
                      supplement <br />
                      designed to boost your energy, support your immune <br />{" "}
                      system, and fuel your active lifestyle.{" "}
                    </div>
                    <div id="shop"> Shop Now</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- </div> --> */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div id="shop_categories">
            {" "}
            <marquee behavior="" direction="left" scrollamount="">
              {" "}
              SHOP BY CATEGORY
            </marquee>{" "}
          </div>
          <div className="container">
            <div className="col-md-12">
              {/* <!-- <marquee behavior="alternate" direction="left"> --> */}
              <div className="row">
                <div className="col-md-2">
                  <div className="col-md-12" id="col_border_rad">
                    <img
                      id="cat_image"
                      src="images/WhatsApp Image 2024-06-24 at 21.17.37_0a2238e3.jpg"
                      alt=""
                    />
                    <div id="child"> Child & Baby Care </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="col-md-12" id="col_border_rad">
                    <img
                      id="cat_image"
                      src="images/WhatsApp Image 2024-06-24 at 21.29.50_9294ed89.jpg"
                      alt=""
                    />
                    <div id="child"> Vitamins & supplements </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="col-md-12" id="col_border_rad">
                    <img
                      id="cat_image"
                      src="images/WhatsApp Image 2024-06-24 at 21.29.27_76fc1614.jpg"
                      alt=""
                    />
                    <div id="child"> Over the Counter </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="col-md-12" id="col_border_rad">
                    <img
                      id="cat_image"
                      src="images/WhatsApp Image 2024-06-24 at 21.28.55_445f0164.jpg"
                      alt=""
                    />
                    <div id="child"> Pet & Household </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="col-md-12" id="col_border_rad">
                    <img
                      id="cat_image"
                      src="images/WhatsApp Image 2024-06-24 at 21.27.58_c890dad8.jpg"
                      alt=""
                    />
                    <div id="child"> Beauty </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="col-md-12" id="col_border_rad">
                    <img
                      id="cat_image"
                      src="images/WhatsApp Image 2024-06-24 at 21.50.16_3ec704b3.jpg"
                      alt=""
                    />
                    <div id="child"> Home Healthcare</div>
                  </div>
                </div>
              </div>
              {/* <!-- </marquee> --> */}
            </div>
          </div>

          <div className="card md-3" id="adv_banner">
            <div className="row g-0">
              <div className="col-md-7">
                <img
                  id="banner_image"
                  src="images/WhatsApp Image 2024-06-24 at 21.29.50_9294ed89.jpg"
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <p className="card-title">
                    {" "}
                    Feel Better Without a Prescription{" "}
                  </p>
                  <div id="counter"> Over The Counter Products </div>
                  <div id="counter_list">
                    <ul>
                      <li>
                        {" "}
                        <a href=""> Allergy Asthma & Sinus </a>
                      </li>
                      <li>
                        {" "}
                        <a href=""> Cold Cough & Flu </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Diabetes Care </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Digestive Health </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Eye Care </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Foot Care </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Ulcer </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div id="shop_now"> Shop Now</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card md-3" id="adv_banner">
            <div className="row g-0">
              <div className="col-md-5">
                <div className="card-body">
                  <p className="card-title"> Patronize Your Health Todday </p>
                  <div id="counter"> Vitamins & Suplements </div>
                  <div id="counter_list">
                    <ul>
                      <li>
                        {" "}
                        <a href=""> Herbs </a>
                      </li>
                      <li>
                        {" "}
                        <a href=""> Cardiovascular Support </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Menopause Support</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Shop By Health Concern </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Suplements </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Vitamins </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href=""> Weight Suppor </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div id="shop_now"> Shop Now</div>
                </div>
              </div>

              <div className="col-md-7">
                <img
                  id="banner_image"
                  src="images/WhatsApp Image 2024-06-25 at 17.42.05_d6384708.jpg"
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="container" style={{ marginBottom: "5%" }}>
            <div className="col-md-12" id="bottom_container_nav">
              <div className="row">
                <div className="col-md-12" id="first_div">
                  {" "}
                  Explore top categories
                </div>
                <div className="col-md-12" id="sec_div">
                  <div className="row">
                    <div className="col-md-3">
                      <div id="explore_header"> Child & Baby Care</div>
                      <div className="div">
                        <ul id="explore_tabs">
                          <li>
                            <a href=""> Bath & Skin Care </a>
                          </li>
                          <li>
                            <a href=""> Health Care </a>
                          </li>
                          <li>
                            <a href=""> Diapers & wipes </a>
                          </li>
                          <li>
                            <a href=""> Feeding & Nursing </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div id="explore_header"> Home Medical Care </div>
                      <div className="div">
                        <ul id="explore_tabs">
                          <li>
                            <a href=""> Bathroom Safety Aids </a>
                          </li>
                          <li>
                            <a href=""> Bed Accessories</a>
                          </li>
                          <li>
                            <a href=""> First Aids Supplies </a>
                          </li>
                          <li>
                            <a href=""> Health Monitors </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div id="explore_header"> Personal Care </div>
                      <div className="div">
                        <ul id="explore_tabs">
                          <li>
                            <a href=""> Antiperspirants & Deodorants </a>
                          </li>
                          <li>
                            <a href=""> Feminine Care </a>
                          </li>
                          <li>
                            <a href=""> Oral Care </a>
                          </li>
                          <li>
                            <a href=""> Skin care </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div id="explore_header"> Beauty </div>
                      <div className="div">
                        <ul id="explore_tabs">
                          <li>
                            <a href=""> Fragrances </a>
                          </li>
                          <li>
                            <a href=""> Hair Care </a>
                          </li>
                          <li>
                            <a href=""> Makeup Products </a>
                          </li>
                          <li>
                            <a href=""> Nails </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
