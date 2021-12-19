import { useEffect, useState } from "react";
import * as christmasCardService from '../../services/christmasCardService';
import { useAuthContext } from '../../contexts/AuthContext';


import ChristmasCardList from "./MyCardList";


const Deals = () => {
    const [christmasCards, setCards] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        christmasCardService.getMyCard(user._id)
            .then(result => {
                console.log('Cards:');
                console.log(result)
                setCards(result)
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }, []);
    return (

        <div id="b-deals" className="services-box main-timeline-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-box">
                            <h2>My Deals</h2>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {/* <div className="col-lg-6 col-sm-6">
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
                    </div> */}

                    <div className="col-lg-6 col-sm-6">
                        <ChristmasCardList christmasCards={christmasCards} />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Deals;