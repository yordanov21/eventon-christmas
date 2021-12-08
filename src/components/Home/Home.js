const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;