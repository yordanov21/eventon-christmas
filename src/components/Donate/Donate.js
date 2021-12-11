import { useEffect, useState } from "react";
import ChristmasCard from "./ChristmasCard";

import * as christamsCardService from '../../services/christmasCardService';

const Donate = () => {
    const [christmasCards, setChristmasCards] = useState([]);

    useEffect(() => {
        christamsCardService.getAll()
            .then(result => {
                setChristmasCards(result)
            });
    }, []);

    return (
        <div id="donate" className="gallery-box" style={{ background: '#f7f7f7' }}>
            <p>empty</p>
            <p></p>
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
                        {christmasCards.map(x => <ChristmasCard key={x._id} card={x} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Donate;