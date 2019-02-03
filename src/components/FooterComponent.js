import React from 'react';
import { Link } from 'react-router-dom';


{/* <a href="http://facebook.com"><i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>*/ }

function Footer(props) {
    return(
        <div className="footer text-center p-4" id="main-footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-md-12 py-2 flex-center">
                        <a className="btn btn-social-icon" id="instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" id="facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" id="twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon" id="youtube" href="http://youtube.com/"><i className="fa fa-youtube-play"></i></a>
                        <a className="btn btn-social-icon" id="mail" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>  
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        {/* for some reason all of this has to be on one line for the spacing to work out */}
                        <p class="text-light">Nudance Studio <i class="fa fa-circle fa-xxs"></i> 123 Main St, Tacoma, WA 98406 <i class="fa fa-circle fa-xxs"></i> (253) 867-5309 <i class="fa fa-circle fa-xxs"></i> nudance@gmail.com
                        <br></br>
                        &copy; <span id="year"></span> Kelsey Lewis & Tyler Hunstock </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;