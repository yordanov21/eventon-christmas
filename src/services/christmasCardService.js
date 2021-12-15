const baseUrl = 'http://localhost:3030/data';
//const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/christmasCards`)

    let christmasCards = await response.json();
    console.log(christmasCards);
    let result = Object.values(christmasCards);
    console.log(result);
    return result;
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

    let result = await response.json();

    return result;
};

export const getOne = async (cardId) => {
    let response = await fetch(`${baseUrl}/christmasCards/${cardId}`)

    let cards = await response.json();

    return cards;
};