const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = async (email, password) => {
    console.log('Register');
    let res = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

};

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    });
};

export const getUser = () => {
    let email = localStorage.getItem('email');

    return email;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};