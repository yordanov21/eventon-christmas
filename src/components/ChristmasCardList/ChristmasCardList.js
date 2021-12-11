import { useEffect, useState } from "react";
import Card from "./Card";
import * as christmasCardService from '../../services/christmasCardService';

const ChristmasCardList = () => {

    const [christmasCards, setCards] = useState([]);

    useEffect(() => {
        christmasCardService.getAll()
            .then(result => {
                console.log('Cards:');
                console.log(result)
                setCards(result)
            })
    }, []);

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