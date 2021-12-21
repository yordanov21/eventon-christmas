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

        <div id="b-deals" className="gallery-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-box">
                            <h2>My Deals</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <ChristmasCardList christmasCards={christmasCards} />
                </div>

            </div>
        </div>
    );
};

export default Deals;