import * as request from './requester'

const baseUrl = 'http://localhost:3030/data';
//const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = () => request.get(`${baseUrl}/christmasGifts`);

export const getBestGift = () => {
    let query = encodeURIComponent(`price>20`);

    return request.get(`${baseUrl}/christmasGifts?where=${query}`);
};

export const getMyGift = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/christmasGifts?where=${query}`);
};

export const getBuyedGift = (ownerId) => {
    let query = encodeURIComponent(`purchases="${ownerId}"`);

    return request.get(`${baseUrl}/christmasGifts?where=${query}`);
};


export const create = async (giftData, token) => {
    let response = await fetch(`${baseUrl}/christmasGifts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...giftData })
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

};

export const update = (giftId, giftData) => request.put(`${baseUrl}/christmasGifts/${giftId}`, giftData);

export const destroy = async (giftId, token) => {
    return fetch(`${baseUrl}/christmasGifts/${giftId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};


export const getOne = async (giftId, signal) => {
    let response = await fetch(`${baseUrl}/christmasGifts/${giftId}`, { signal })

    let cards = await response.json();

    return cards;
};

// export const getOne = async (giftId) => {
//     let response = await fetch(`${baseUrl}/christmasGifts/${giftId}`)

//     let cards = await response.json();

//     return cards;
// };

export const buy = async (giftId, card, token) => {
    let response = await fetch(`${baseUrl}/christmasGifts/${giftId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            card
        })
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};