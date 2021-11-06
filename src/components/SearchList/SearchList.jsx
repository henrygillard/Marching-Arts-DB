import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';

export default function SearchList({filteredGroup}) {

    const filtered = filteredGroup.map(g => <Link to={`/${g._id}`}><div className="group-name">{g.name}</div></Link>)
    const [searchField, setSearchField] = useState("");


    function handleChange(evt) {
        evt.preventDefault();
        setSearchField(evt.target.value);
      }
      
      
    

    return(
        <div>
            <div>
                Search Bar
                <input type="search" placeholder="Search by Name" onChange={handleChange}
                />
                </div>
            {filtered}
        </div>
    )

}