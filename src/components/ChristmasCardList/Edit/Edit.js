import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as christmasCardService from '../../../services/christmasCardService';
import { useAuthContext } from '../../../contexts/AuthContext';
import useCardState from '../../../hooks/useCardState';
import { Alert } from 'react-bootstrap';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import './Edit.css'

const Edit = () => {
    const navigate = useNavigate();
    const { cardId } = useParams();
    const [errors, setErrors] = useState({ name: null });
    const [card, setCard] = useCardState(cardId);
    const { addNotification } = useNotificationContext();

    const onchristmasCardEditHandler = (e) => {
        e.preventDefault();

        let cardData = Object.fromEntries(new FormData(e.currentTarget))
        console.log('cardData', cardData);

        // validation
        let formData = new FormData(e.currentTarget);
        console.log('formData: ', formData);
        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');

        if (!name.match(/^[a-zA-Z0-9 ]+$/)) {
            addNotification("Username should consist of english letters, digits and spaces", types.info);
            return;
        }

        if (name.length < 5) {
            addNotification('Card name should be min 5 characters long!', types.info);
            return;
        }

        if (!name.match(/^[a-zA-Z0-9 ]+$/)) {
            addNotification("Description should consist of english letters, digits and spaces", types.info);
            return;
        }

        if (description.length < 20) {
            addNotification(`Description should be min ${20} characters long!`, types.info);
            return;
        }

        if (!imageUrl.match(/^https?:\/\//i)) {
            addNotification("Invalid image url", types.info);
            return;
        }

        if (price < 1 || price > 100) {
            addNotification("Price should be between 1 and 100 $", types.info);
            return;
        }
        //

        christmasCardService.update(card._id, cardData)
            .then(result => {
                navigate('/donate-card');
            })
            .catch(err => {
                addNotification(err, types.error);
            });;


    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 5) {
            setErrors(state => ({ ...state, name: 'Your name sould be at least 5 characters' }))
        } else {
            setErrors(state => ({ ...state, name: null }))
        }
    };

    return (

        <section id="create-page" className="wrapper">
            <form id="create-form" className="form-create" onSubmit={onchristmasCardEditHandler} method="POST">
                <legend>Edit Christmas Card</legend>
                <div className="create-field">
                    <label htmlFor="name">Name</label>
                    <span className="input" style={{ backgroundColor: errors.name ? 'red' : 'green' }}>
                        {/* <input type="text" name="name" id="name" defaultValue={card.name} onBlur={nameChangeHandler} style={{ color: errors.name ? 'red' : 'green' }} /> */}
                        <input type="text" name="name" id="name" defaultValue={card.name} />
                    </span>
                    {/* <Alert variant='danger' show={errors.name}>{errors.name}</Alert> */}
                </div>
                <div className="create-field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" defaultValue={card.description}></textarea>
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" defaultValue={card.imageUrl} />
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="image">Price (between 1 and 100$)</label>
                    <span className="input">
                        <input type="number" name="price" id="price" defaultValue={card.price} />
                    </span>
                </div>
                <div id='btn-container' className='btn-container'>
                    <input className="button submit" type="submit" value="Edit Christmas Card" />
                </div>

            </form>
        </section>
    );
};

export default Edit;