import React from "react";
// import { Link } from "react-router-dom";


function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="footer text-center p-4" id="main-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 py-2 flex-center">
              <a
                className="btn btn-social-icon"
                id="instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                className="btn btn-social-icon"
                id="facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="btn btn-social-icon"
                id="twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="btn btn-social-icon"
                id="youtube"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube-play" />
              </a>
              <a className="btn btn-social-icon" id="mail" href="mailto:">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              {/* for some reason all of this has to be on one line for the spacing to work out */}
              <p className="text-light">
                Nudance Studio <i className="fa fa-circle fa-xxs" /> 123 Main St,
                Tacoma, WA 98406 <i className="fa fa-circle fa-xxs" /> (253)
                867-5309 <i className="fa fa-circle fa-xxs" /> nudance@gmail.com
                <br /> Copyright &copy; {year} Kelsey Lewis & Tyler Hunstock{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
