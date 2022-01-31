import React from 'react';

import User from '../../components/User';

function FeaturedUsers() {
    const featuredUsers = JSON.parse(localStorage.getItem('featuredUsers') || "{}");

    const renderUsers = () => {
        return Object.values(featuredUsers)?.map((user) => {
            const { avatar_url, login, info } = user;

            return (
                <div
                    key={avatar_url}
                    className='user'
                >
                    <User
                        avatar={avatar_url}
                        login={login}
                        {...info && { name: info.name }}
                    />
                </div>
            );
        });
    }

    return (
        <div className='users'>
            {renderUsers()}
        </div>
    );
}

export default FeaturedUsers;
