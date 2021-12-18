import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";
import * as cardService from '../../services/christmasCardService';
import ConfirmDialog from '../Common/ConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [card, setCard] = useState({});
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    let { cardId } = useParams();

    useEffect(() => {
        cardService.getOne(cardId)
            .then(cardResult => {
                setCard(cardResult);
            })
    }, [cardId]);

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
            <Link className="button" to="edit">Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const userButtons = <a className="button" href="#">Buy</a>;
    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => { setShowDeleteDialog(false) }} onSave={deleteHandler} />
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
        </>


    );
};

export default Details;