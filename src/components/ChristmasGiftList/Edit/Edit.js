import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as christmasGiftService from '../../../services/christmasGiftService';
import { useAuthContext } from '../../../contexts/AuthContext';
import useGiftState from '../../../hooks/useGiftState';
import { Alert } from 'react-bootstrap';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import './Edit.css'

const Edit = () => {
    const navigate = useNavigate();
    const { giftId } = useParams();
    const [errors, setErrors] = useState({ name: null });
    const [gift, setGift] = useGiftState(giftId);
    const { addNotification } = useNotificationContext();

    const onchristmasGiftEditHandler = (e) => {
        e.preventDefault();

        let giftData = Object.fromEntries(new FormData(e.currentTarget))
        console.log('giftData', giftData);

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
            addNotification('Gift name should be min 5 characters long!', types.info);
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

        if (price < 50 || price > 2000) {
            addNotification("Price should be between 50 and 2000 $", types.info);
            return;
        }
        //

        christmasGiftService.update(gift._id, giftData)
            .then(result => {
                navigate('/donate-gift');
            })
            .catch(err => {
                addNotification(err, types.error);
            });;


    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({ ...state, name: 'Your name sould be at least 3 characters' }))
        } else {
            setErrors(state => ({ ...state, name: null }))
        }
    };

    return (

        <section id="create-page" className="wrapper">
            <form id="create-form" className="form-create" onSubmit={onchristmasGiftEditHandler} method="POST">
                <legend>Edit Christmas Gift</legend>
                <div className="create-field">
                    <label htmlFor="name">Name</label>
                    <span className="input" style={{ backgroundColor: errors.name ? 'red' : 'green' }}>
                        <input type="text" name="name" id="name" defaultValue={gift.name} onBlur={nameChangeHandler} style={{ backgroundColor: errors.name ? 'red' : 'green' }} />
                    </span>
                    <Alert variant='danger' show={errors.name}>{errors.name}</Alert>
                </div>
                <div className="create-field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" defaultValue={gift.description}></textarea>
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" defaultValue={gift.imageUrl} />
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="image">Price</label>
                    <span className="input">
                        <input type="number" name="price" id="price" defaultValue={gift.price} />
                    </span>
                </div>
                <div id='btn-container' className='btn-container'>
                    <input className="button submit" type="submit" value="Edit Christmas Gift" />
                </div>

            </form>
        </section>
    );
};

export default Edit;