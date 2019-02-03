import React from 'react';
import { Link } from 'react-router-dom';


{/* <a href="http://facebook.com"><i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>*/ }

function Footer(props) {
<<<<<<< HEAD
    return (
        <div id="main-footer" className="text-center p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            <a href="http://twitter.com">
                                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a href="http://facebook.com">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a href="http://google.com">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a href="http://linkedin.com">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a href="http://instagram.com">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a href="http://pinterest.com">
                                <i className="fab fa-pinterest fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                        </div>
                        <p className="text-light">Nudance Studio <i className="fas fa-circle fa-xs"></i> 123 Main St, Tacoma, WA 984606
                <i className="fas fa-circle fa-xs"></i> (253) 867-5309 <i className="fas fa-circle fa-xs"></i> nudance@gmail.com
                <br />
                            Copyright &copy; <span id="year"></span> Kelsey Lewis & Tyler Hunstock</p>
=======
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
>>>>>>> b8d8467b7b7763926ec7087ba27326754339d1ff
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;