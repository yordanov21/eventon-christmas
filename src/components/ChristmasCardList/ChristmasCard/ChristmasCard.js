//import { Link } from "react-router-dom";

const ChristmasCard = ({
    card
}) => {

    return (
        <li>
            <a href="/">
                <img className="img-fluid" src={card.imageUrl} alt="single image" />
                <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                <p>Name: {card.name}</p>
                <p>Card for {card.price}$</p>
            </a>
        </li>
    );
};

export default ChristmasCard;