import { useParams } from "react-router"
import { useState, useEffect, React } from "react";
import VideoList from "../../components/VideoList/VideoList";
import * as groupsAPI from "../../utilities/groups-api";
import { Link } from "react-router-dom";

export default function YearDetailPage({groups}) {


    const [thisGroup, setThisGroup] = useState()
    const {id} = useParams()
    const {yId} = useParams();

    useEffect(function () {
        async function getGroup() {
            const currentGroup = await groupsAPI.getGroup(id);
            setThisGroup(currentGroup);
        }
        getGroup();
    }, [id]);

    let year;
    if (thisGroup) {
        year = thisGroup.years.find(g => g._id === yId)
    }

    return(
        <div>
        <Link to={`/groups/${id}`}><h3>Back to {thisGroup && thisGroup.name}</h3></Link>
        <h2>{thisGroup && thisGroup.name} - {thisGroup && year.year}</h2>
        {thisGroup && 
        <VideoList group={thisGroup} year={year}/>
        }
        </div>
        
    )
}