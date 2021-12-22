import { useEffect, useState } from "react";
import * as christmasCardService from '../../services/christmasCardService';

import ChristmasCardList from "../ChristmasCardList";
import './DonateCard.css';


const DonateCard = () => {

    const [christmasCards, setCards] = useState([]);

    useEffect(() => {
        christmasCardService.getAll()
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
        <div id="donate" className="gallery-box" style={{ background: '#f7f7f7' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Donate Card</h2>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <ChristmasCardList christmasCards={christmasCards} />
                </div>
            </div>
        </div>
    );
};

export default DonateCard;