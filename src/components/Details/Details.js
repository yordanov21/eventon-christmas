import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

import { useAuthContext } from "../../contexts/AuthContext";
import * as cardService from '../../services/christmasCardService';
import * as buyService from '../../services/buyService';
import ConfirmDialog from '../Common/ConfirmDialog';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import useCardState from '../../hooks/useCardState';


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    let { cardId } = useParams();
    const [card, setCard] = useCardState(cardId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        buyService.getCount(cardId)
            .then(buysCount => {
                setCard(state => ({ ...state, purchases: buysCount }))
            })
    }, [])


    const deleteHandler = (e) => {
        e.preventDefault();

        cardService.destroy(cardId, user.accessToken)
            .then(() => {
                navigate('/donate');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setShowDeleteDialog(true);
    }


    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${cardId}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const buyCard = () => {
        if (user._id === card._ownerId) {
            return;
        }



        buyService.buy(user._id, cardId)
            .then((res) => {
                setCard(state => ({ ...state, purchases: [...state.purchases, user._id] }));
                addNotification('Thank you for your donate. You sucsessfuly buy a christmas card', types.success);
            })

        // let purchases = [...card.purchases, user._id];
        // let buyedCard = { ...card, purchases };
        // cardService.buy(cardId, buyedCard, user.accessToken)
        //     .then(resData => {
        //         console.log(resData);
        //         setCard(state => ({
        //             ...state,
        //             purchases
        //         }))
        //     })
    }

    const userButtons = <Button className="button" onClick={buyCard}>Buy</Button>;
    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => { setShowDeleteDialog(false) }} onSave={deleteHandler} />
            <section id="details-page" className="details">

                <div className="pet-information">
                    <h3>Name: {card.name}</h3>
                    <p className="img"><img src={card.imageUrl} /></p>
                    <p className="type">Price: {card.price} $</p>
                    <div className="actions">
                        {user._id && (user._id === card._ownerId
                            ? ownerButtons
                            : userButtons
                        )}
                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes">People buy this card: {card.purchases?.length || 0}</span>
                            <span id="total-ammount">Money collect: {(card.purchases?.length || 0) * card.price} $</span>
                        </div>

                    </div>
                </div>
                <div className="pet-description">
                    <h3>Description:</h3>
                    <p>{card.description}</p>
                </div>
            </section>
        </>


    );
};

export default Details;