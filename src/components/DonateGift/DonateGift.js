import { useEffect, useState } from "react";
import * as christmasGiftService from '../../services/christmasGiftService';

import ChristmasGiftList from "../ChristmasGiftList";
import './DonateGift.css';


const DonateGift = () => {

    const [christmasGifts, setGifts] = useState([]);

    useEffect(() => {
        christmasGiftService.getAll()
            .then(result => {
                console.log('Gifts:');
                console.log(result)
                setGifts(result)
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
                            <h2>Donate Gift</h2>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <ChristmasGiftList christmasGifts={christmasGifts} />
                </div>
            </div>
        </div>
    );
};

export default DonateGift;