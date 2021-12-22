import { useEffect, useState } from "react";
import Gift from "./ChristmasGift";
import * as christmasGiftService from '../../services/christmasGiftService';
import './ChristmasGiftList.css'

const ChristmasGiftList = ({
    christmasGifts
}) => {
    return (
        <>
            {
                christmasGifts.length > 0
                    ? (
                        <ul className="popup-gallery clearfix">
                            {christmasGifts.map(x => <Gift key={x._id} gift={x} />)}
                        </ul>
                    )
                    : <p className="no-chritsmas-card">No gift available!</p>
            }
        </>
    );
};

export default ChristmasGiftList;