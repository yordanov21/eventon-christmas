//import { useEffect, useState } from "react";
import Gift from "../MyGift";
import './MyGiftList.css'
//import * as christmasCardService from '../../services/christmasCardService';


const ChristmasGiftList = ({
    christmasGifts
}) => {
    return (
        <>
            {
                christmasGifts.length > 0
                    ? (
                        <ul className="popup-gallery-2 clearfix">
                            {christmasGifts.map(x => <Gift key={x._id} gift={x} />)}
                        </ul>
                    )
                    : <p className="no-chritsmas-card">No Gift available!</p>
            }
        </>
    );
};

export default ChristmasGiftList;