//import { useEffect, useState } from "react";
import Card from "../MyCard";
//import * as christmasCardService from '../../services/christmasCardService';

const ChristmasCardList = ({
    christmasCards
}) => {
    return (
        <>
            {
                christmasCards.length > 0
                    ? (
                        <>
                            {christmasCards.map(x => <Card key={x._id} card={x} />)}
                        </>
                    )
                    : <p className="no-chritsmas-card">No card available!</p>
            }
        </>
    );
};

export default ChristmasCardList;