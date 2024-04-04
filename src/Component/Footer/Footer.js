import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>our branches</h3>
            <Link href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> india{" "}
            </Link>
            <Link href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> japan{" "}
            </Link>
            <Link href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> france{" "}
            </Link>
            <Link href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> russia{" "}
            </Link>
            <Link href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> USA{" "}
            </Link>
          </div>

          <div className="box">
            <h3>Dealerships near you</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Dealership 1{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Dealership 2{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Dealership 3{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Dealership 4{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Dealership 5{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> Dealership 6{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +91-9833953390{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +91-9833953390{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> p23muskang@iimidr.ac.in{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Mumbai, India - 400076{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-pinterest"></i> pinterest{" "}
            </a>
          </div>
        </div>

        <div className="credit shadow"> created by Ms. Muskan Goyal</div>
      </section>
    </div>
  );
};

export default Footer;
