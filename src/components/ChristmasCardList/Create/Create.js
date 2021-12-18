import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as christmasCardService from '../../../services/christmasCardService';
import { useAuthContext } from '../../../contexts/AuthContext';

const Create = () => {
    const { user } = useAuthContext();
    // for redirect 
    const navigate = useNavigate();

    const onchristmasCardCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');
        let purchases = 0;

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
    }

    return (

        <section id="create-page" className="wrapper">
            <form id="create-form" className="form-create" onSubmit={onchristmasCardCreate} method="POST">
                <legend>Create new Christmas Card</legend>
                <p className="create-field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </span>
                </p>
                <p className="create-field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p className="create-field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" />
                    </span>
                </p>
                <p className="create-field">
                    <label htmlFor="image">Price</label>
                    <span className="input">
                        <input type="number" name="price" id="price" placeholder="IPrice" />
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Christmas Card" />
            </form>
        </section>
    );
};

export default Create;