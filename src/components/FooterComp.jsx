import React from "react";

const FooterComp = () => {
  return (
    <div>
      {/* footer section */}
      <footer className="page-footer font-small stylish-color-dark pt-4 text-light">
        {/* <!-- Footer Links --> */}
        <div className="container">
          <div className="container text-center text-md-left">
            {/* <!-- Grid row --> */}
            <div className="row pt-5">
              {/* <!-- Grid column --> */}
              <div className="col-md-4 mx-auto text-start">
                <div className="footer-logo bg-white w-75">
                  <img src="./images/footer logo.png" alt="" />
                </div>
                <p>
                  Replenish him third creature and meat <br /> blessed void a
                  fruit gathered you’re,
                  <br /> they’re two waters own morning <br /> gathered greater.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="footer-line col-md-2 mx-auto text-start">
                {/* <!-- Links --> */}
                <h6 className=" mt-3 mb-4">About Us</h6>
                <hr />
                <ul className="list-unstyled text-decoration-none">
                  <li>
                    <a href="/">Affiliates</a>
                  </li>
                  <li>
                    <a href="/">Partners</a>
                  </li>
                  <li>
                    <a href="/">Reviews</a>
                  </li>
                  <li>
                    <a href="/">Blogs</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="footer-line col-md-2 mx-auto text-start">
                {/* <!-- Links --> */}
                <h6 className=" mt-3 mb-4">Popular Classes</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Crech</a>
                  </li>
                  <li>
                    <a href="/">Primary</a>
                  </li>
                  <li>
                    <a href="/">Secondary</a>
                  </li>
                  <li>
                    <a href="/">Highschool</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="footer-line col-md-2 mx-auto text-start">
                {/* <!-- Links --> */}
                <h6 className=" mt-3 mb-4">Newsletter</h6>
                <hr />
                <p>Sign up to news letter to get latest updates</p>
                <div className="inp col-auto">
                  <label
                    className="visually-hidden"
                    htmlFor="autoSizingInputGroup"
                  >
                    Enter Email address
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Enter Email address"
                    />
                    <div className="input-group-text">
                      <i className="fa fa-mouse-pointer" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className="icons">
                  <a href="/">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
          {/* <!-- Footer Links --> */}

          {/* Copyright */}
          <hr className="horizontal" />
          <div className="footer-copyright text-center py-3">
            <p> Copywright © 2020 Dinnygreen international</p>
            <div className="scroll-button">
              <button>
                <a href="#top">
                  <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
              </button>
            </div>
          </div>
          {/* Copyright  */}
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
