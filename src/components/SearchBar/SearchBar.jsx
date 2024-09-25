import React from 'react';
import style from './SearchBar.module.scss';

export function SearchBar({ toggleSearch }) {
    return (
        <div className={style.searchContainer}>
            {toggleSearch && (
                <input type='search' placeholder='Search, or search not. There is no try.' />
            )}
        </div>
    );
}

