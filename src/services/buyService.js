import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const buy = (userId, cardId) => request.post(`${baseUrl}/buys`, { userId, cardId });
export const getCount = (cardId) => {
    const query = encodeURIComponent(`cardId="${cardId}"`);

    return request.get(`${baseUrl}/buys?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};


export const buyGift = (userId, giftId) => request.post(`${baseUrl}/buysGift`, { userId, giftId });
export const getCountGift = (giftId) => {
    const query = encodeURIComponent(`giftId="${giftId}"`);

    return request.get(`${baseUrl}/buysGift?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};