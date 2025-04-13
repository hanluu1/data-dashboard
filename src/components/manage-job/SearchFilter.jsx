import React from 'react';

const SearchFilter = ({
                        searchJob, 
                        setSearchJob, 
                        filterCategory, 
                        setFilterCategory, 
                        categories}) =>     { 
  
    return (
        <>
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for jobs..."
                value={searchJob}
                onChange={(e) => setSearchJob(e.target.value)}
            />
            <div className='search-icon'><img src='/src/assets/search-icons.svg' width={20} height={20}/></div>
        </div>

        <div className="filter-bar">
            <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
            >
                <option value="">All Locations</option>
                    {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
            </select>
        </div>
        </>
    );
};
export default SearchFilter;