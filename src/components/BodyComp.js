import React from "react";
import Responsive from "./Slider";

const BodyComp = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="sec1 py-3">
        <div className=" sec1-content d-flex container flex-column flex-md-row align-items-md-center justify-content-md-between">
          <div>
            <div className="overflow-hidden rounded-circle">
              <img src="./images/section1.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="text pb-3 ms-2">
            <h2>
              Advanced Learning System <br />
              Around The World
            </h2>
            <p>
              We have made a collaborative effort in bringing together <br />
              scientific expertise from other countries, steered jointly <br />{" "}
              by their governments on the basis of shared, <br />
              policy-driven interests.{" "}
            </p>
            <div className="row pb-3 d-flex flex-nowrap mb-1">
              <div className="col px-2  border-end">
                <h2>
                  25k<sup>+</sup>
                </h2>
                <p>Teachers</p>
              </div>
              <div className="col px-2 border-end">
                <h2>
                  74k<sup>+</sup>
                </h2>
                <p>Active Courses</p>
              </div>
              <div className="col px-2">
                <h2>250</h2>
                <p>Extra Curricular</p>
              </div>
            </div>
            <div className="button">
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      {/* end of section 1 */}

      {/* section 2 */}
      <section className="sec2 ">
        <div className="sec-overlay py-4">
          <div className="container">
            <div className="heading wt-50 pt-5 pb-5 text-center text-white">
              <h2>Features</h2>
              <p>
                Dinny Green International School is nurtured in grace and truth,
                raising green, <br /> flourishing and successful children.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {card.map((card) => (
                <div className="col" key={card.id}>
                  <div className="card border-0 h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <img src="/images/sec2.png" alt="" />
                        <div className="ms-3">
                          <h4 className="card-title">{card.title}</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod ukkf tempor incididunt u.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* end of section 2 */}

      {/* section 3 */}
      <section className="sec3 py-5">
        <div className="sec3-content container me-0 pe-0 d-flex flex-column flex-md-row">
          <div className="t-box pb-2">
            <div className="text">
              <h2>Find Out More About Our Learning Experience</h2>
              <p>
                We have built hospitals, arranged doctor appointments <br />{" "}
                have the diagnose and treat yourem ipsu r aol <br />
                ad meniam, quis nostrud exercitation.
              </p>
              <div className="list">
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check-circle"></i> Culture in Diversity
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> We have built
                    hosptials, arranged doctors
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> We have built
                    hosptials, arranged doctors
                  </li>
                </ul>
              </div>
              <a className="learn-more" href="/">
                Learn More
              </a>
            </div>
          </div>
          <div className="sec3-img">
            <img className="w-100" src="./images/section 3.png" alt="" />
          </div>
        </div>
      </section>
      {/* end of section 3 */}

      {/* section 4 */}
      <section className="sec4 pb-4">
        <div className="sec4-content col mx-auto align-items-center my-5">
          <div className="heading text-center pt-5">
            <h2>Popular Classes</h2>
            <p>
              We have built hospitals, arranged doctor appointments have the
              diagnose and treat <br /> yourem ipsu r aol ad meniam, quis
              nostrud exercitation.
            </p>
          </div>
          <div className="container slide-area">
            <Responsive />
          </div>
          <div className="button text-center mt-5">
            <a href="/">View all Courses</a>
          </div>
        </div>
      </section>
      {/* end of section 4 */}

      {/* section 5 */}
      <section className="sec5">
        <div className="sec5-content container col mx-auto align-items-center my-5">
          <div className="heading text-center pt-5 pb-5">
            <h2>Find Out How We Help Students</h2>
            <p>
              authentic ‘voice and choice’ matter and a big part of this is
              leaving ‘room for interpretation’ in the assignment. Those gray
              areas <br /> can confuse students unaccustomed to agency and
              choice, but once they become comfortable with it, it can be a
              significant <br />
              factor in helping them show what their ‘best’ actually is.
            </p>
          </div>
          <div className="img mx-auto text-center">
            {/* <img src="./images/section 5.png" alt="" className="img-fluid" /> */}
            <div className="overlay">
              <div className="play">
                <a href="/">
                  <i
                    className="fa fa-play-circle fa-10x"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of section 5 */}

      {/* section 6 */}
      <section className="sec6">
        <div className="sec6-content col mx-auto align-items-center">
          <div className="heading text-center pt-5 pb-5">
            <h2>Success Stories</h2>
            <div className="img6 pb-2">
              <img className="i6a" src="./images/section 6a.png" alt="" />
              <img className="i6b" src="./images/section 6b.png" alt="" />
              <img className="i6a" src="./images/section 6c.png" alt="" />
            </div>
            <p>
              We have built hospitals, arranged doctor appointments have the
              diagnose and treat yourem ipsu r aol ad <br /> meniam, quis
              nostrud exercitation.We doctor appointments have the diagnose and
              treat yourem ipsu r <br /> exercitatranged docts have the diagnose
              and treat ipsu r aol{" "}
            </p>
          </div>
        </div>
      </section>
      {/* end of section 6 */}

      {/* section 7 */}
      <section className="sec7 py-2 mb-5 pt-3 pb-5">
        <div className="sec7-content col mx-auto align-items-center container">
          <div className="heading text-center pt-5">
            <h2 className="font-weight-bold pb-2">
              Our Instructors & Teachers
            </h2>
            <p>
              We have the best teachers and instructors that would be able to
              train your kids, making <br /> them Creative, God fearing,
              Respectfull and Intelligent.{" "}
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
            {fullTime.map((card) => (
              <div className="col " key={card.id}>
                <div className="card sec7-card bg-transparent h-100">
                  <img
                    src={`./images/sec ${card.img}.png`}
                    alt=""
                    className="card-img"
                  />
                  <div className="img-lay card-img-overlay">
                    <div className="container">
                      <a href="/" className="button">
                        Full time
                      </a>
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">
                        <i className="fas fa-calendar-minus"></i> 28th April
                        2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="button text-center">
            <a href="/">See all</a>
          </div>
        </div>
      </section>
      {/* end of section 7 */}

      {/* section 8 */}
      <section className="sec-contact">
        <div className="sec8-content container">
          <div className="heading text-center mb-5">
            <h2>Contact Us</h2>
          </div>
          <div className="form-content container">
            <form action="" className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone"
                  aria-label="Phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  aria-label="Subject"
                />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  className="form-control"
                  name=""
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="button col-12 text-center mb-5">
                <button className="send-now" type="submit">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyComp;

const card = [
  {
    id: 1,
    title: "Awesome Teachers",
  },
  {
    id: 2,
    title: "Global Recognition",
  },
  {
    id: 3,
    title: "Extra curricular activities",
  },
  {
    id: 4,
    title: "Government Approved",
  },
];
const fullTime = [
  {
    id: 1,
    img: 1,
    title: "Masters in Geology",
  },
  {
    id: 2,
    img: 2,
    title: "Doctor appointments have the diagnose",
  },
  {
    id: 3,
    img: 3,
    title: "Doctor appointments have the diagnose",
  },
];
