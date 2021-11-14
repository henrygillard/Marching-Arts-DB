import { Link } from "react-router-dom";
import React from 'react';
import "./YearCard.css"

export default function YearCard({ year, group, key, idx }) {
    return(
        <Link className="link" to={`/groups/${group._id}/${year._id}`}>
        <h3 className="year-card">{year.year}</h3>
        </Link>
    )
}