function App() {
  return (
    <div id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

      {/* <div id="preloader">
        <div className="loader">
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div> */}

      <header className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd"
              aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
              <ul className="navbar-nav">
                <li><a className="nav-link active" href="#home">Home</a></li>
                <li><a className="nav-link" href="#wish">Wish</a></li>
                <li><a className="nav-link" href="#b-deals">Best deals</a></li>
                <li><a className="nav-link" href="#donate">Donate</a></li>
                <li><a className="nav-link" href="#testi">Testimonial</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="ulockd-home-slider">
        <div className="container-fluid">
          <div className="row">
            <div className="pogoSlider" id="js-main-slider">
              <div className="pogoSlider-slide" style={{ backgroundImage: "url(" + "images/slider-01.jpg" + ")" }}></div>
              <div className="pogoSlider-slide" style={{ backgroundImage: "url(" + "images/slider-01.jpg" + ")" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div id="wish" className="about-box" style={{ paddingBottom: '0' }}>
        <div className="about-a1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box">
                  <h2>Best Wishes</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">

                  <div className="col-lg-6 col-md-6 col-sm-12 text_align_center">
                    <div className="full">
                      <img className="img-responsive" src="images/w1.png" alt="#" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2><img style={{ width: '60px' }} src="images/head_s.png" alt="#" /> Harry Mike Wishes</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever since the when an unknown..
                    </p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                    </p>
                    <a href="#" className="hvr-radial-out button-theme">Read More</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-a1" style={{ background: '#f7f7f7', marginTop: '50px', paddingTop: '75px', paddingBottom: '50px' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2><img style={{ width: '60px' }} src="images/head_s.png" alt="#" /> Jonh Max Wishes</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever since the when an unknown..
                    </p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                    </p>
                    <a href="#" className="hvr-radial-out button-theme">Read More</a>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 text_align_center">
                    <div className="full">
                      <img className="img-responsive" src="images/w2.png" alt="#" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="b-deals" className="services-box main-timeline-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Best Deals</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <figure className="effect-service">
                <img src="images/d1.png" alt="" />
                <figcaption>
                  <h2>Deal One</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6 col-sm-6">
              <figure className="effect-service">
                <img src="images/d2.png" alt="" />
                <figcaption>
                  <h2>Deal Two</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6 col-sm-6">
              <figure className="effect-service">
                <img src="images/d3.png" alt="" />
                <figcaption>
                  <h2>Deal Three</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6 col-sm-6">
              <figure className="effect-service">
                <img src="images/d4.png" alt="" />
                <figcaption>
                  <h2>Deal Four</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </div>

          </div>

        </div>
      </div>

      <div id="donate" className="gallery-box" style={{ background: '#f7f7f7' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Donate</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ul className="popup-gallery clearfix">
              <li>
                <a href="images/d1.png">
                  <img className="img-fluid" src="images/d1.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d2.png">
                  <img className="img-fluid" src="images/d2.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d3.png">
                  <img className="img-fluid" src="images/d3.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d4.png">
                  <img className="img-fluid" src="images/d4.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d1.png">
                  <img className="img-fluid" src="images/d1.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d2.png">
                  <img className="img-fluid" src="images/d2.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d3.png">
                  <img className="img-fluid" src="images/d3.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d4.png">
                  <img className="img-fluid" src="images/d4.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
              <li>
                <a href="images/d1.png">
                  <img className="img-fluid" src="images/d1.png" alt="single image" />
                  <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="testi" className="gallery-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 col-10 offset-1 testimonial_slider">
              <div id="client_slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#client_slider" data-slide-to="0" className="active"></li>
                  <li data-target="#client_slider" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item text-center active">
                    <div className="testimonial_img">
                      <img width="150" height="150" className="d-block rounded-circle"
                        src="http://nicesnippets.com/demo/profile-1.jpg" alt="First slide" />
                    </div>
                    <h5 className="mt-4 mb-0"><strong className="text-uppercase"
                      style={{ color: '#e91327', paddingBottom: '0' }}>Harry Mike</strong></h5>
                    <p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem
                      tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel,
                      semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius
                      nibh non aliquet.</p>
                  </div>
                  <div className="carousel-item text-center">
                    <div className="testimonial_img">
                      <img width="150" height="150" className="d-block rounded-circle"
                        src="http://nicesnippets.com/demo/profile-3.jpg" alt="First slide" />
                    </div>
                    <h5 className="mt-4 mb-0"><strong className="text-uppercase"
                      style={{ color: '#e91327', paddingBottom: '0' }}>Jonh Max</strong></h5>
                    <p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem
                      tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel,
                      semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius
                      nibh non aliquet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-box" style={{ background: '#f7f7f7' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-7 col-sm-7 col-xs-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name"
                          placeholder="Your Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Your Email" id="email" className="form-control"
                          name="name" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Your number" id="number" className="form-control"
                          name="number" required data-error="Please enter your number" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea className="form-control" id="message" placeholder="Your Message" rows="8"
                          data-error="Write your message" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button text-center">
                        <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>


            <div className="col-lg-5 col-sm-5 col-xs-12">
              <div className="left-contact">
                <div className="media cont-line">
                  <div className="media-left icon-b">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  </div>
                  <div className="media-body dit-right">
                    <h4>Address</h4>
                    <p>Fleming 196 Woodside Circle Mobile, FL 36602</p>
                  </div>
                </div>
                <div className="media cont-line">
                  <div className="media-left icon-b">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="media-body dit-right">
                    <h4>Email</h4>
                    <a href="#">demoinfo@gmail.com</a><br />
                    <a href="#">demoinfo @gmail.com</a>
                  </div>
                </div>
                <div className="media cont-line">
                  <div className="media-left icon-b">
                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </div>
                  <div className="media-body dit-right">
                    <h4>Phone Number</h4>
                    <a href="#">12345 67890</a><br />
                    <a href="#">12345 67890</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="subscribe-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-inner text-center clearfix">
                <h2>Subscribe</h2>
                <form action="#" method="post">
                  <div className="form-group">
                    <input className="form-control-1" id="email-1" name="email" placeholder="Email Address"
                      required="" type="text" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="hvr-radial-out">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">Evento Christmas</a>
                Design By : <a href="https://html.design/">html design</a></p>
            </div>
          </div>
        </div>
      </footer>


      <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up"></i></a>

      {/* ALL JS FILES */}
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      {/* ALL PLUGINS */}
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/jquery.pogo-slider.min.js"></script>
      <script src="js/slider-index.js"></script>
      <script src="js/smoothscroll.js"></script>
      <script src="js/form-validator.min.js"></script>
      <script src="js/contact-form-script.js"></script>
      <script src="js/isotope.min.js"></script>
      <script src="js/images-loded.min.js"></script>
      <script src="js/custom.js"></script>
    </div>
  );
}

export default App;
