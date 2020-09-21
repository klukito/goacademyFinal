import React from 'react';
import styles from './styles.module.css'

const SearchBar = (data) => {
    const {value, placeholder, onChange} = data;
    
    return (
        <div className="relative">
            <input className={`${styles.searchBar} focus:outline-none `} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                    data-testid="input"
                    />
            <div className={styles.filledSearchBar}></div>
        </div>
    );
};   


export default SearchBar

