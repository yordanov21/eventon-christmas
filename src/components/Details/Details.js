import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as cardService from '../../services/christmasCardService';

const Details = () => {

    const [card, setCard] = useState({});
    let { cardId } = useParams();

    useEffect(async () => {
        let cardResult = await cardService.getOne(cardId)
        setCard(cardResult);
    }, []);

    return (
        <section id="details-page" className="details">
            <h1>dsfdff</h1>
            <h1>dsfdff</h1>
            <h1>dsfdff</h1>
            <h1>dsfdff</h1>
            <div className="pet-information">
                <h3>Name: {card.name}</h3>
                <p className="img"><img src={card.imageUrl} /></p>
                <p className="type">Price: {card.price}</p>
                <div className="actions">

                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>


                    <a className="button" href="#">Buy</a>


                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">People buy this card: {card.purchases}</span>
                    </div>

                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{card.description}</p>
            </div>
        </section>

    );
};

export default Details;