import { Link } from "react-router-dom";
import "./YearCard.css"

export default function YearCard({ year, group, key }) {
    return(
         <Link to={`/groups/${group._id}/${year._id}`}>
        <div className="year-card">{year.year}</div>
        </Link>
        
    )
}