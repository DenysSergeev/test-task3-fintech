import React from 'react';
import { createBrowserHistory } from 'history';

import MenuItem from './components/MenuItem';

import { ITEMS } from '../../constants/sidebar';

import './SideBar.css';

const history = createBrowserHistory();

function SideBar() {
    const handleNavigate = (path) => () => {
        history.push(path);
    };

    const renderMenuItems = () => {
        return ITEMS.map((item) => {
            const { path, title } = item;
            const { pathname } = history.location;
            const isActive = pathname === path;

            return (
                <MenuItem
                    key={path}
                    path={path}
                    title={title}
                    isActive={isActive}
                    onClick={handleNavigate(path)}
                />
            );
        });
    };

    return (
        <div className='sidebar'>
            {renderMenuItems()}
        </div>
    );
}

export default SideBar;
