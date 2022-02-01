import React from "react";

const HeaderComp = () => {
  return (
    <div id="top">
      <div className="header-top">
        <div className="container align-items-center d-flex justify-content-between">
          <div className="contact d-flex">
            <p className="my-0">
              <span className="fw-bold">Call:</span> +2349012624126
            </p>
            <p className="my-0">
              <span className="fw-bold">Support:</span> info@yourcompany.com
            </p>
          </div>
          <div className="log d-flex">
            <button className="login">Log in</button>
            <button className="register">Register</button>
          </div>
        </div>
      </div>

      {/* navigation menu start */}
      <div className="header-navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg pb-0 pt-0">
            <div className="container-fluid">
              <a className="navbar-brand pt-0 pb-0 text-center" href="/">
                <img src="./images/logo 2.svg" alt="" />
              </a>
              <button
                className="navbar-toggler btn-outline-success"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars" style={{ color: "#fff" }}></i>
                </span>
              </button>
              <div
                className="bar-content collapse navbar-collapse text-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Instructors
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Courses
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Blog
                    </a>
                  </li>
                </ul>
                <button className="contact-but">Contact</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* navigation ending */}

      {/* header body */}
      <div className="header-body">
        <div className="header-text container">
          <h1>
            Give Your Child A <br />
            Chance To Be Unique
          </h1>
          <p>
            Experts agree that a child’s personality doesn’t fully form <br />
            until they are in elementary school. <br /> <a href="/">Sign in </a>
            to enroll your child
          </p>
          <div className="button">
            <a className="Signup" href="/">
              Sign up
            </a>
            <a className="learn-more mt-2 mt-md-0" href="/">
              Learn More
            </a>
          </div>
        </div>
        <div className="blur"></div>
      </div>

      {/* end of header body */}
    </div>
  );
};

export default HeaderComp;
