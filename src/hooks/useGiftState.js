import { useEffect, useState, useMemo } from "react";

import * as giftService from '../services/christmasGiftService';

const useGiftState = (giftId) => {
    const [gift, setGift] = useState({});

    // save de result of the function and return this result every time when invoke the hook
    // this function will be invoke only one
    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        giftService.getOne(giftId, controller.signal)
            .then(giftResult => {
                setGift(giftResult);
            })

        return () => {
            controller.abort();
        }

    }, [giftId, controller]);

    return [
        gift,
        setGift
    ]
};

export default useGiftState;