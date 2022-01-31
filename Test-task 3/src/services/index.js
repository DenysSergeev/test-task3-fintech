const API_URL = 'https://api.github.com/users';

export const fetchUsers = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        return data;
    } catch (error) {
        console.warn(`Fetch users error: ${error}`);
    }
};

export const getUser = async (login) => {
    try {
    const response = await fetch(`${API_URL}/${login}`);
    const data = await response.json();

    return data;
    } catch (error) {
        console.warn(`Fetch user error: ${error}`);
    }
};
