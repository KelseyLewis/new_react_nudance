import React from 'react';
import { Link } from 'react-router-dom';


{/* <a href="http://facebook.com"><i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>*/ }

function Footer(props) {
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;