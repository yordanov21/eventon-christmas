const Contact = () => {

    return (

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
    );
};

export default Contact;