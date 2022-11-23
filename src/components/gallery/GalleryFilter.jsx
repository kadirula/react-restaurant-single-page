import React, { useState } from 'react'

const GalleryFilter = ({ setGalleryData, galleries }) => {

    const [dataFilter, setDataFilter] = useState('*');

    const toggleFilterIsActive = (e) => {
        const filterData = e.target.getAttribute('data-filter');
        setDataFilter(filterData);
        updateGalleryItem(filterData);
    }

    const updateGalleryItem = (dataFilter) => {
        const newGalleryData = [...galleries];
        if (dataFilter === '*') {
            setGalleryData(galleries);
        }
        else {
            const filterItems = newGalleryData.filter(filter => filter.filters.includes(dataFilter))
            setGalleryData(filterItems);
        }
    }

    return (
        <div className="gallery__filter">
            <button
                className={`${dataFilter === '*' ? 'active' : ''}`}
                onClick={(e) => toggleFilterIsActive(e)}
                data-filter='*'
            >
                All
            </button>
            <button
                className={`${dataFilter === 'fastfood' ? 'active' : ''}`}
                onClick={(e) => toggleFilterIsActive(e)}
                data-filter='fastfood'
            >
                Fast Food
            </button>
            <button
                className={`${dataFilter === 'breakfast' ? 'active' : ''}`}
                onClick={(e) => toggleFilterIsActive(e)}
                data-filter='breakfast'
            >
                Breakfast
            </button>
            <button
                className={`${dataFilter === 'lunch' ? 'active' : ''}`}
                onClick={(e) => toggleFilterIsActive(e)}
                data-filter='lunch'
            >
                Lunch
            </button>
            <button
                className={`${dataFilter === 'dinner' ? 'active' : ''}`}
                onClick={(e) => toggleFilterIsActive(e)}
                data-filter='dinner'
            >
                Dinner
            </button>
        </div>
    )
}

export default GalleryFilter