import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ onFilterChange }) => {
    return (
    <div className="filter"  id="search" style={{ 
        display: 'flex',  
        alignItems: 'center'
    }}>
        <div style={{ position: 'relative'}}>
        <input style={{
            borderRadius: '10px',
            width: '60%',
            border: 'none',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            height: '30px',
            padding: '0 30px'
        }}
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onFilterChange('title', e.target.value)}
        />
        <FontAwesomeIcon
            icon={faSearch}
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: '10px',
                color: '#000000',
                cursor: 'pointer'
            }}
            onClick = {() => {'movie title'}}
        />
        </div>
        <input style={{
            borderRadius: '10px',
            width: '45%',
            border: 'none',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            height: '30px',

            
        }}
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onFilterChange('rating', e.target.value)}
        />
    </div>
    );
};

export default Filter;
