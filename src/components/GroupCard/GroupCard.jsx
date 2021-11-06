import { Link } from "react-router-dom";
import React from 'react';
import "./GroupCard.css"

export default function GroupCard({group, selected, idx}) {
    
    return(
        
        <Link to={`/groups/${group._id}`} className="links">
        {selected ? 
            <div className="group-name"
            style={idx % 2 ? {backgroundColor:"white"}: {backgroundColor:"#e8e4e4"} }>
                {group.name}
            </div>
        : <p></p>}
        </Link>
        
    )
}