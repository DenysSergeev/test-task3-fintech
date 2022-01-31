import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateUser } from '../../actions/users';

import User from '../../components/User';

import './Main.css';

function Main() {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state?.users);

    const handleUserClick = (user) => async () => {
        const { login, id } = user;
        const storageUsers = JSON.parse(localStorage.getItem('featuredUsers')) || {};

        storageUsers[id] = { ...user };

        dispatch(updateUser(login));
        localStorage.setItem('featuredUsers', JSON.stringify(storageUsers));
    }

    const renderUsers = () => {
        return users?.map((user) => {
            const { avatar_url, login, info } = user;

            return (
                <div
                    key={avatar_url}
                    className='user'
                    onClick={handleUserClick(user)}
                >
                    <User
                        avatar={avatar_url}
                        login={login}
                        {...info && { name: info.name }}
                    />
                </div>
            );
        });
    };

    return (
        <div className='users'>
            {renderUsers()}
        </div>
    );
}

export default Main;
