import React from "react";

function Footer() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h2>Contact Us</h2>
            <div className="d-flex align-items-center justify-content-center">
              <i className="fas fa-map-marker-alt me-5 fs-4"></i>
              <p className="">
                Mamtaz Plaza(4th floor) <br />
                Dhanmodi, Dhaka-1205
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <i className="far fa-envelope me-5 fs-4"></i>
              <p className="mt-1">ruhuliuice@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h2>More Visa Offers</h2>
            <p>Canada Visa</p>
            <p>Spain Visa</p>
            <p>Turkey Visa</p>
            <p>Stuent Visa</p>
          </div>
          <div className="col-md-4 text-center">
            <h2>Follow Us</h2>
            <div className="my-3">
              <i className="fab fa-facebook me-5 fs-4"></i>
              <i className="fab fa-youtube fs-4"></i>
              <br />
              <i className="fab fa-instagram me-5 fs-4 mt-3"></i>
              <i className="fab fa-pinterest fs-4 mt-3"></i>
            </div>
          </div>
          <p className="text-center bg-primary rounded fw-bold text-white">&copy;2021 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
