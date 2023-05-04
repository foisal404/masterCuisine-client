import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div className='px-3 '>
            <NavLink to={to} className={({ isActive}) =>isActive? "text-red-400 font-bold": ""}
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;