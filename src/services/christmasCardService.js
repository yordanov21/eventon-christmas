import * as request from './requester'

const baseUrl = 'http://localhost:3030/data';
//const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = () => request.get(`${baseUrl}/christmasCards`);

export const getBestCard = () => {
    let query = encodeURIComponent(`price>20`);

    return request.get(`${baseUrl}/christmasCards?where=${query}`);
};

export const getMyCard = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/christmasCards?where=${query}`);
};

export const getBuyedCard = (ownerId) => {
    let query = encodeURIComponent(`purchases="${ownerId}"`);

    return request.get(`${baseUrl}/christmasCards?where=${query}`);
};


export const create = async (cardData, token) => {
    let response = await fetch(`${baseUrl}/christmasCards`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...cardData })
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

};

export const update = (cardId, cardData) => request.put(`${baseUrl}/christmasCards/${cardId}`, cardData);

export const destroy = async (cardId, token) => {
    return fetch(`${baseUrl}/christmasCards/${cardId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};


export const getOne = async (cardId, signal) => {
    let response = await fetch(`${baseUrl}/christmasCards/${cardId}`, { signal })

    let cards = await response.json();

    return cards;
};

// export const getOne = async (cardId) => {
//     let response = await fetch(`${baseUrl}/christmasCards/${cardId}`)

//     let cards = await response.json();

//     return cards;
// };

export const buy = async (cardId, card, token) => {
    let response = await fetch(`${baseUrl}/christmasCards/${cardId}`, {
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