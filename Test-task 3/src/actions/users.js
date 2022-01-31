import { UPDATE_USER, UPDATE_USERS_LIST, CLEAR_USERS } from '../constants/actions/users';

import { fetchUsers, getUser } from '../services';

export function getUsers() {
    return async (dispatch) => {
        try {
            const users = await fetchUsers();
            const featuredUsers = JSON.parse(localStorage.getItem('featuredUsers') || "{}");

            return dispatch({
                type: UPDATE_USERS_LIST,
                payload: { users, featuredUsers }
            });
        } catch (error) {
            console.warn(`getUsers error: ${error}`);
        }
    };
}

export function updateUser(login) {
    return async (dispatch, getState) => {
        try {
            const { users } = await getState().users;
            const { info } = users.find((el) => el.login === login);

            if (!info) {
                const newUser = await getUser(login);

                return dispatch({
                    type: UPDATE_USER,
                    payload: { login, newUser, users }
                });
            }
        } catch (error) {
            console.warn(`updateUser error: ${error}`);
        }
    };
}

export function removeFeaturedUsers() {
    return {
        type: CLEAR_USERS
    };
}
