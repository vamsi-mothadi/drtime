import React from 'react'

const SearchNav = () => {
  
  return (
    <div className='search-nav'>
        <div className="dummy">
             Location
      <i className="fa-solid fa-location"></i>
      </div>
      <div className="search-bar"><input className="input" placeholder="Search"></input>
       <div>
          <button className="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
       </div>
      </div>
      <div></div>
    </div>
  )
}

export default SearchNav
