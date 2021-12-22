import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

import { useAuthContext } from "../../contexts/AuthContext";
import * as cardService from '../../services/christmasCardService';
import * as buyService from '../../services/buyService';
import ConfirmDialog from '../Common/Comfitm/ConfirmDialog';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import useCardState from '../../hooks/useCardState';
import './DetailsCard.css';

let dialogFlag = 0;

const DetailsCard = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    let { cardId } = useParams();
    const [card, setCard] = useCardState(cardId);
    const [showDialog, setshowDialog] = useState(false);
    const [dialogInfo, setDialogInfo] = useState();



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
                setshowDialog(false);
                setDialogInfo({
                    title: '',
                    message: ''
                })
                dialogFlag = 0;
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setshowDialog(true);
        setDialogInfo({
            title: 'Delete Forever!',
            message: 'Are you sure to delete?'
        })
        dialogFlag = 1;
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit-card/${cardId}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );


    const buyClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setshowDialog(true);
        setDialogInfo({
            title: 'Almost Donate :)',
            message: 'Are you sure you want to buy this item?'
        })
        dialogFlag = 2;
    }

    const buyHandler = () => {

        if (user._id === card._ownerId) {
            return;
        }

        buyService.buy(user._id, cardId)
            .then((res) => {
                setCard(state => ({ ...state, purchases: [...state.purchases, user._id] }));
                addNotification('Thank you for your donate. You sucsessfuly buy a christmas card', types.success);
            })
            .finally(() => {
                setshowDialog(false);
                setDialogInfo({
                    title: '',
                    message: ''
                });
                dialogFlag = 0;
            });
    }



    const userButtons = <Button className="button" onClick={buyClickHandler}>Buy</Button>;
    return (
        <>
            <ConfirmDialog show={showDialog} onClose={() => { setshowDialog(false) }} onSave={(dialogFlag == 1) ? deleteHandler : buyHandler} dialogInfo={dialogInfo} />
            <section id="details-page" className="card-details">
                <div className="card-img">
                    <img className="img" src={card.imageUrl} />
                </div>
                <div id="card-information" className="card-information">
                    <div className="main-info">
                        <h3 className="card-name">Name: {card.name}</h3>
                        <p className="price">Price: {card.price} $</p>
                        <div className="actions">
                            {user._id && (user._id === card._ownerId
                                ? ownerButtons
                                : userButtons
                            )}
                        </div>
                        <div className="card-buys">
                            <span id="total-buys">People buy this card: {card.purchases?.length || 0}</span>
                        </div>
                        <div className="card-buys">
                            <span id="total-ammount">Money collect: {(card.purchases?.length || 0) * card.price} $</span>
                        </div>
                    </div>
                    <div className="card-description">
                        <h3>Description:</h3>
                        <p>{card.description}</p>
                    </div>
                </div>

            </section>
        </>


    );
};

export default DetailsCard;