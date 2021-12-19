import { useEffect, useState } from "react";
import Card from "./ChristmasCard";
import * as christmasCardService from '../../services/christmasCardService';

const ChristmasCardList = ({
    christmasCards
}) => {
    return (
        <>
            {
                christmasCards.length > 0
                    ? (
                        <ul className="popup-gallery clearfix">
                            {christmasCards.map(x => <Card key={x._id} card={x} />)}
                        </ul>
                    )
                    : <p className="no-chritsmas-card">No card available!</p>
            }
        </>
    );
};

export default ChristmasCardList;