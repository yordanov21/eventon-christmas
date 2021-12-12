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

export const logout = () => {
    localStorage.removeItem('email');
};

export const getUser = () => {
    let email = localStorage.getItem('email');

    return email;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};