import {  useParams } from "react-router-dom"
import { useEffect, useState, React } from "react";
import ReactPlayer from "react-player";
import YearCard from "../../components/YearCard/YearCard";
import * as groupsAPI from "../../utilities/groups-api"
import UpdateGroupInfo from "../UpdateGroupInfo/UpdateGroupInfo";
import GroupList from "../../components/GroupList/GroupList";
import "./GroupDetailPage.css"

export default function GroupDetailPage({setGroups, user}) {

    useEffect(function() {
        async function getGroups() {
          const groups = await groupsAPI.getAll();
          setGroups(groups);
        }
        getGroups();
      }, []);
    
    let { id } = useParams();

    const [thisGroup, setThisGroup] = useState()

    useEffect(function () {
        async function getGroup() {
            const currentGroup = await groupsAPI.getGroup(id);
            setThisGroup(currentGroup);
        }
        getGroup();
    }, [id]);

    // let group = groups.find(g => g.name === id)
    // const years = thisGroup.years.map(y => <YearCard key={y.year} year={y} group={thisGroup}/>)
    
    return(
        <div className="group-detail-page" id="group-detail-page">
            <h1> {thisGroup && thisGroup.name}</h1>
            <h3>Created by {thisGroup && thisGroup.user.name}</h3>
            <h3>Circuit : {thisGroup && thisGroup.category}</h3>
            <UpdateGroupInfo group={thisGroup} setGroup={setThisGroup} user={user}/>
            <div className="video-container">
            <ReactPlayer className='react-player' url={thisGroup && thisGroup.videoUrl} light></ReactPlayer>
            </div>
            <h3>Years</h3>
            { thisGroup && thisGroup.years.map((y)  => <YearCard key={y.year} year={y} group={thisGroup}/>)}
            
        </div>
    )
}