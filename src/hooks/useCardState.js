import { useEffect, useState, useMemo } from "react";

import * as cardService from '../services/christmasCardService';

const useCardState = (cardId) => {
    const [card, setCard] = useState({});

    // save de result of the function and return this result every time when invoke the hook
    // this function will be invoke only one
    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        cardService.getOne(cardId, controller.signal)
            .then(cardResult => {
                setCard(cardResult);
            })

        return () => {
            controller.abort();
        }

    }, [cardId, controller]);

    return [
        card,
        setCard
    ]
};

export default useCardState;