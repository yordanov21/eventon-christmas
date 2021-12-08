const Participants = () => {

    return (
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
    );
};

export default Participants;