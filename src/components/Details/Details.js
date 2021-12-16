import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import * as cardService from '../../services/christmasCardService';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [card, setCard] = useState({});
    let { cardId } = useParams();

    useEffect(async () => {
        let cardResult = await cardService.getOne(cardId)
        setCard(cardResult);
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        cardService.destroy(cardId, user.accessToken)
            .then(() => {
                navigate('/donate');
            })
        // .finally(() => {
        //     setShowDeleteDialog(false);
        // });
    };

    const ownerButtons = (
        <>
            <a className="button" href="#">Edit</a>
            <a className="button" href="#" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButtons = <a className="button" href="#">Buy</a>;
    return (
        <section id="details-page" className="details">

            <div className="pet-information">
                <h3>Name: {card.name}</h3>
                <p className="img"><img src={card.imageUrl} /></p>
                <p className="type">Price: {card.price}</p>
                <div className="actions">
                    {user._id && (user._id === card._ownerId
                        ? ownerButtons
                        : userButtons
                    )}
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