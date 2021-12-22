import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

import { useAuthContext } from "../../contexts/AuthContext";
import * as giftService from '../../services/christmasGiftService';
import * as buyService from '../../services/buyService';
import ConfirmDialog from '../Common/Comfitm/ConfirmDialog';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import useGiftState from '../../hooks/useGiftState';
import './DetailsGift.css';

let dialogFlag = 0;

const DetailsGift = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    let { giftId } = useParams();
    const [gift, setGift] = useGiftState(giftId);
    const [showDialog, setshowDialog] = useState(false);
    const [dialogInfo, setDialogInfo] = useState();



    useEffect(() => {
        buyService.getCountGift(giftId)
            .then(buysCountGift => {
                setGift(state => ({ ...state, purchases: buysCountGift }))
            })
    }, [])


    const deleteHandler = (e) => {
        e.preventDefault();

        giftService.destroy(giftId, user.accessToken)
            .then(() => {
                navigate('/donate-gift');
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
            <Link className="button" to={`/edit-gift/${giftId}`}>Edit</Link>
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

        if (user._id === gift._ownerId) {
            return;
        }

        buyService.buyGift(user._id, giftId)
            .then((res) => {
                setGift(state => ({ ...state, purchases: [...state.purchases, user._id] }));
                addNotification('Thank you for your donate. You sucsessfuly buy a christmas gift', types.success);
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
                    <img className="img" src={gift.imageUrl} />
                </div>
                <div id="card-information" className="card-information">
                    <div className="main-info">
                        <h3 className="card-name">Name: {gift.name}</h3>
                        <p className="price">Price: {gift.price} $</p>
                        <div className="actions">
                            {user._id && (user._id === gift._ownerId
                                ? ownerButtons
                                : userButtons
                            )}
                        </div>
                        <div className="card-buys">
                            <span id="total-buys">People buy this card: {gift.purchases?.length || 0}</span>
                        </div>
                        <div className="card-buys">
                            <span id="total-ammount">Money collect: {(gift.purchases?.length || 0) * gift.price} $</span>
                        </div>
                    </div>
                    <div className="card-description">
                        <h3>Description:</h3>
                        <p>{gift.description}</p>
                    </div>
                </div>

            </section>
        </>


    );
};

export default DetailsGift;