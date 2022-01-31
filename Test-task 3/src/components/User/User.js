import React from 'react';

import './User.css';

function User({ avatar, login, name }) {
    return (
        <>
            <img
                className='avatar'
                src={avatar}
                alt='user'
            />

            <div className='info'>
                <span>{login}</span>

                {name && (
                    <span>{name}</span>
                )}
            </div>
        </>
    );
}

export default User;
