import produce from 'immer';

import { UPDATE_USERS_LIST, UPDATE_USER, CLEAR_USERS } from '../constants/actions/users';

const initialState = {
    users: [],
    featuredUsers: [],
};

export default produce((draft, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_USERS_LIST: {
            draft.users = payload.users;
            draft.featuredUsers = payload.featuredUsers;
            break;
        }

        case UPDATE_USER: {
            const newUsers = payload.users.map((user => {
                const outputUser = { ...user };

                if (user.login === action.payload.login) {
                    outputUser.info = payload.newUser;
                }

                return outputUser;
            }));

            draft.users = newUsers;
            break;
        }

        case CLEAR_USERS: {
            draft.users = [];
            break;
        }

        default: {
            return draft;
        }
    }
}, initialState);
