import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import archery from "./products/images-of-products/archery.jpg";
import archery2 from "./products/images-of-products/archery-2.jpg";
import archery4 from "./products/images-of-products/archery4.jpg";
import boxing from "./products/images-of-products/boxing.jpg";
import archery3 from "./products/images-of-products/archery-3.jpg";
import cricketballfeeder from "./products/images-of-products/cricket-ballfeeder.jpg";
import cricketbat from "./products/images-of-products/cricketbat.jpg";
import cricketset from "./products/images-of-products/cricketset.jpg";
import football from "./products/images-of-products/football.jpg";
import golfset from "./products/images-of-products/golfset.jpg";
import kayak from "./products/images-of-products/kayak.jpg";
import shoe1 from "./products/images-of-products/shoe-1.jpg";
import shoe2 from "./products/images-of-products/shoe-2.jpg";
import shoe3 from "./products/images-of-products/shoe-3.jpg";
import underterrain from "./products/images-of-products/underterrain.jpg";
import tabletennis from "./products/images-of-products/tabletennis.jpg";
import kohli from "./home-images/kohli.jpg";
import messi from "./home-images/messi.jpg";
import tennis from "./home-images/tennis.jpg";
import archeryHome from "./home-images/archery.jpeg";
import dsc from "./products/images-of-products/dsc.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Cricket() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <style>
          {`
            .allproducts {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border: 1px solid transparent;
            }
  
            .allproducts:hover {
              transform: scale(1.05);
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
              border-color: whitesmoke;
            }
  
          `}
        </style>

        <div className="row">
          <h1 className="mt-4 mb-5" style={{ fontSize: "40px" }}>
            Featured Products
          </h1>
        </div>

        <div className="row ms-4 me-2">
          <div className="row justify-content-evenly mt-5">
            <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
              <Link
                to="/shoe1"
                className="card allproducts"
                style={{ width: "18rem", textDecoration: "none" }}
              >
                <img
                  src={shoe1}
                  alt="shoe1"
                  className="card-img-top img-fluid d-block mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fontstyle fs-5 mb-2">
                    Adidas Howzat Spike Cricket Shoe
                  </p>
                  <h5 className="card-text fontstyle mb-3">₹3,800</h5>
                  <Link to="/Login" className="btn btn-warning d-block mx-auto">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>

            <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
              <Link
                to="/cricketballfeeder"
                className="card allproducts"
                style={{ width: "18rem", textDecoration: "none" }}
              >
                <img
                  src={cricketballfeeder}
                  alt="cricketballfeeder"
                  className="card-img-top img-fluid d-block mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fontstyle fs-5 mb-2">
                    Automatic Academy Cricket Ball Feeder
                  </p>
                  <h5 className="card-text fontstyle mb-3">₹11,995</h5>
                  <Link to="/Login" className="btn btn-warning d-block mx-auto">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>

            <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
              <Link
                to="/cricketset"
                className="card allproducts"
                style={{ width: "18rem", textDecoration: "none" }}
              >
                <img
                  src={cricketset}
                  alt="cricketset"
                  className="card-img-top img-fluid d-block mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fontstyle fs-5 mb-2">
                    SG Economy Cricket Kit
                  </p>
                  <h5 className="card-text fontstyle mb-3">₹6,000</h5>
                  <Link to="/Login" className="btn btn-warning d-block mx-auto">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>

            <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
              <Link
                to="/cricketbat"
                className="card allproducts"
                style={{ width: "18rem", textDecoration: "none" }}
              >
                <img
                  src={cricketbat}
                  alt="cricketbat"
                  className="card-img-top img-fluid d-block mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fontstyle fs-5 mb-2">
                    English Willow Bat
                  </p>
                  <h5 className="card-text fontstyle mb-3">₹2,100</h5>
                  <Link to="/Login" className="btn btn-warning d-block mx-auto">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>
            <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
              <Link
                to="/cricketbat"
                className="card allproducts"
                style={{ width: "18rem", textDecoration: "none" }}
              >
                <img
                  src={cricketbat}
                  alt="cricketbat"
                  className="card-img-top img-fluid d-block mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fontstyle fs-5 mb-2">
                    English Willow Bat
                  </p>
                  <h5 className="card-text fontstyle mb-3">₹2,100</h5>
                  <Link to="/Login" className="btn btn-warning d-block mx-auto">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>
            <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
              <Link
                to="/shoe3"
                className="card allproducts"
                style={{ width: "18rem", textDecoration: "none" }}
              >
                <img
                  src={shoe3}
                  alt="shoe3"
                  className="card-img-top img-fluid d-block mx-auto"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fontstyle fs-5 mb-2">
                    Nike Renew Run 4
                  </p>
                  <h5 className="card-text fontstyle mb-3">₹4,647</h5>
                  <Link to="/Login" className="btn btn-warning d-block mx-auto">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cricket;
