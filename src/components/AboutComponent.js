import React, { Component } from "react";
import { Card, Container, Row } from "reactstrap";

console.log('About Entered');

class About extends Component {
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        {/* ABOUT */}
        <section>
          <Container className="home-inner">
            <Row>
              <div className="col-12">
                <div className="col-inner m-5">
                  <h3 className="h2">
                    <strong>NuDance</strong>
                    <p className="lead">
                      NuDance feels that students should have a variety of
                      experiences to grow into better dancers and most
                      importantly to be inspired in their art form. We currently
                      offer beginning to advanced classnames for dancers as
                      young as 3 years old through teen and adult age groups.
                    </p>
                  </h3>
                </div>
              </div>
            </Row>
            <Row>
              <div className="col-md-6 col-sm-12 my-5">
                <h3>
                  <strong>Mission Statement:</strong>{" "}
                </h3>
                <p className="lead text-muted">
                  The goal at NuDance is to partner with students to meet the
                  individual needs of each dancer whether it be recreational or
                  on a national competitive level. Our educational program will
                  inspire students to create and express themselves in a safe
                  and supportive environment. NuDance instructors strive to
                  create the self discipline and confidence that is required to
                  achieve success in today&#x2019;s society.
=======
      <Container className="home-inner">
        <Row>
          <div className="col-12">
            <div className="col-inner m-5">
              <h3 className="h2">
                <strong>NuDance</strong>
                <p className="lead">
                  NuDance feels that students should have a variety of
                  experiences to grow into better dancers and most
                  importantly to be inspired in their art form. We currently
                  offer beginning to advanced classnames for dancers as
                  young as 3 years old through teen and adult age groups.
>>>>>>> 53f39f86a5f11870b7ee86d00c74ed52184e2fa5
                </p>
              </h3>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-md-6 col-sm-12 my-5">
            <h3><strong>Mission Statement:</strong>{" "}</h3>
              <p className="lead text-muted">
                The goal at NuDance is to partner with students to meet the
                individual needs of each dancer whether it be recreational or
                on a national competitive level. Our educational program will
                inspire students to create and express themselves in a safe
                and supportive environment. NuDance instructors strive to
                create the self discipline and confidence that is required to
                achieve success in today&#x2019;s society.
              </p>
          </div>
          <div className="col-md-6 col-sm-12 my-5">
            <h3><strong>Current Available Courses:</strong></h3>
              <p className="lead text-muted">
                Hip Hop, Contemporary, Musical Theater, Ballet, Tumbling,
                Jazz, Tap, Conditioning, Technique, Singing and Acting
                Classes.
              </p>
          </div>
        </Row>
        <h2><span>WHY CHOOSE NuDance?</span></h2>

        {/* ACCOLADE BOXES */}
<<<<<<< HEAD
        <section id="accolades" className="m-5 text-center">
          <Container>
            <Row className="mb-4 justify-content-center">
              <div className="col-md-4 mb-4">
                <Card id="box1" className="h-100">
                  <div className="card-body">
                    <i className="fa fa-trophy fa-6x" />
                    <h3>
                      <strong>RECOGNIZED NATIONALLY</strong>
                    </h3>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 mb-4">
                <Card id="box2" className="h-100">
                  <div className="card-body">
                    <i className="fa fa-users fa-6x" />
                    <h3>
                      <strong>AMAZING INSTRUCTORS</strong>
                    </h3>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 mb-4">
                <Card id="box1" className="h-100">
                  <div className="card-body">
                    <i className="fa fa-thumbs-up fa-6x" />
                    <h3>
                      <strong>DECADES OF EXPERIENCE</strong>
                    </h3>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 mb-4">
                <Card id="box2" className="h-100">
                  <div className="card-body">
                    <i className="fa fa-star fa-6x" />
                    <h3>
                      <strong>BROADWAY STYLE SHOWS</strong>
                    </h3>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 mb-4">
                <Card id="box1" className="h-100">
                  <div className="card-body">
                    <i className="fab fa-map-marker-alt fa-6x" />
                    <h3>
                      <strong>3 CONVENIENT LOCATIONS</strong>
                    </h3>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 mb-4">
                <Card id="box2" className="h-100">
                  <div className="card-body">
                    <i className="fa fa-heart fa-6x" />
                    <h3>
                      <strong>FAMILY ATMOSPHERE</strong>
                    </h3>
                  </div>
                </Card>
              </div>
            </Row>
          </Container>
        </section>
=======
        <Row className="m-5 text-center" id="accolades">
          <div className="mb-4 justify-content-center">
            <div className="col-md-4 mb-4">
              <Card id="box1" className="h-100">
                <div className="card-body">
                  <i className="fas fa-trophy fa-6x" />
                  <h3>
                    <strong>RECOGNIZED NATIONALLY</strong>
                  </h3>
                </div>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card id="box2" className="h-100">
                <div className="card-body">
                  <i className="fas fa-users fa-6x" />
                  <h3>
                    <strong>AMAZING INSTRUCTORS</strong>
                  </h3>
                </div>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card id="box1" className="h-100">
                <div className="card-body">
                  <i className="fas fa-thumbs-up fa-6x" />
                  <h3>
                    <strong>DECADES OF EXPERIENCE</strong>
                  </h3>
                </div>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card id="box2" className="h-100">
                <div className="card-body">
                  <i className="fas fa-star fa-6x" />
                  <h3>
                    <strong>BROADWAY STYLE SHOWS</strong>
                  </h3>
                </div>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card id="box1" className="h-100">
                <div className="card-body">
                  <i className="fas fa-map-marker-alt fa-6x" />
                  <h3>
                    <strong>3 CONVENIENT LOCATIONS</strong>
                  </h3>
                </div>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card id="box2" className="h-100">
                <div className="card-body">
                  <i className="fas fa-heart fa-6x" />
                  <h3>
                    <strong>FAMILY ATMOSPHERE</strong>
                  </h3>
                </div>
              </Card>
            </div>
          </div>
        </Row>
>>>>>>> 53f39f86a5f11870b7ee86d00c74ed52184e2fa5

        {/* TESTIMONIALS */}
        <Row className=" p-4 bg-dark text-white text-center" id="testimonials">
          <h3>TESTIMONIALS</h3>
          <div className="col">
            <div className="slider">
              <div>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    &#x201C;Talented instructors who really care about their
                    dancers. I had nothing but positive experiences. I
                    highly recommend this studio.&#x201D;
                  </p>
                  <footer className="blockquote-footer">
                    Jerry Howell
                  </footer>
                </blockquote>
              </div>
              <div>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    &quot;The staff is helpful, professional, and everything
                    a dance studio should be. All the instructor&apos;s put
                    the needs of students first.&quot;
                  </p>
                  <footer className="blockquote-footer">Nancy Pena</footer>
                </blockquote>
              </div>
              <div>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    &#x201C;Nudance Academy is the best dance studio in the
                    whole world. I love how everyone treats you and the
                    teachers are great!&#x201D;
                  </p>
                  <footer className="blockquote-footer">Kelly Black</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </Row>
      </Container>
  

      //   <script>

      //     //Get the current year for the copyright
      //     $('#year').text(new Date().getFullYear());   I moved this to Footer, its working properly

      //     $('.slider').slick({ I still need to do this stuf
      //       infinite: true,
      //       slideToShow: 1,
      //       slideToScroll: 1
      //     });

      //     $('.card').hover(function() {
      //       $(this).addClass('shadow-lg').css('cursor', 'pointer');
      //     },
      //       function() {
      //         $(this).removeClass('shadow-lg');
      //       }
      //     );
      //   </script>
      // </section>
    );
  }
}

export default About;
