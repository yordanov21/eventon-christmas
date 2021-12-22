import { useEffect, useState } from "react";
import * as christmasGiftService from '../../services/christmasGiftService';
import { useAuthContext } from '../../contexts/AuthContext';


import ChristmasGiftList from "./MyGiftList";


const MyGifts = () => {
    const [christmasGifts, setGifts] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        christmasGiftService.getMyGift(user._id)
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

        <div id="b-deals" className="gallery-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-box">
                            <h2>My Gifts</h2>
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

export default MyGifts;