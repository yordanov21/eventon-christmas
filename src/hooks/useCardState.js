import { useEffect, useState } from "react";

import * as cardService from '../services/christmasCardService';

const useCardState = (cardId) => {
    const [card, setCard] = useState({});

    useEffect(() => {
        cardService.getOne(cardId)
            .then(cardResult => {
                setCard(cardResult);
            })
    }, [cardId]);

    return [
        card,
        setCard
    ]
};

export default useCardState;