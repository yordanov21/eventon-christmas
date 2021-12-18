import * as request from './requester'

const baseUrl = 'http://localhost:3030/data';
//const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = () => request.get(`${baseUrl}/christmasCards`);


export const create = async (cardData, token) => {
    let response = await fetch(`${baseUrl}/christmasCards`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...cardData })
    });

    let result = await response.json();

    return result;
};

export const update = (cardId, cardData) => request.put(`${baseUrl}/christmasCards/${cardId}`, cardData);

export const destroy = (cardId, token) => {
    return fetch(`${baseUrl}/christmasCards/${cardId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const getOne = async (cardId) => {
    let response = await fetch(`${baseUrl}/christmasCards/${cardId}`)

    let cards = await response.json();

    return cards;
};

export const buy = (cardId, card, token) => {
    return fetch(`${baseUrl}/christmasCards/${cardId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            card
        })
    }).then(res => res.json());
};