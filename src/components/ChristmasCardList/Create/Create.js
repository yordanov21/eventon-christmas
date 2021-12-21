import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as christmasCardService from '../../../services/christmasCardService';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import './Create.css';


const Create = () => {
    const { user } = useAuthContext();
    // for redirect 
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();

    const onchristmasCardCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');
        let purchases = [];


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

        if (price < 1 || price > 100000) {
            addNotification("Price should be between 1 and 100 000 $", types.info);
            return;
        }

        christmasCardService.create({
            name,
            imageUrl,
            description,
            price,
            purchases,
        }, user.accessToken)
            .then(result => {
                navigate('/donate');
            })
            .catch(err => {
                addNotification(err, types.error);
            });
    }

    return (

        <section id="create-page" className="wrapper">
            <form id="create-form" className="form-create" onSubmit={onchristmasCardCreate} method="POST">
                <legend>Create new Christmas Card</legend>
                <div className="create-field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" />
                    </span>
                </div>
                <div className="create-field">
                    <label htmlFor="image">Price</label>
                    <span className="input">
                        <input type="number" name="price" id="price" placeholder="IPrice" />
                    </span>
                </div>
                <div id='btn-container' className='btn-container'>
                    <input className="button submit" type="submit" value="Add Christmas Card" />
                </div>
            </form>
        </section>
    );
};

export default Create;