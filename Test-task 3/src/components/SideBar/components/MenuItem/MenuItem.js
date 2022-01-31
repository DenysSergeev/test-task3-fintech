import React from 'react';

import './MenuItem.css';

function MenuItem({ path, title, onClick, isActive }) {
    const className = isActive
        ? `menuItem menuItem_active`
        : 'menuItem';

    return (
        <span
            className={className}
            onClick={onClick}
        >{title}</span>
    );
}

export default MenuItem;
