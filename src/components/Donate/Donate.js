import { Routes, Route } from "react-router-dom";

import ChristmasCardList from "../ChristmasCardList";

const Donate = () => {

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
                    <ChristmasCardList />

                </div>
            </div>
        </div>
    );
};

export default Donate;