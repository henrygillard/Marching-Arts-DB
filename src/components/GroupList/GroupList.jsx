import { useEffect, useState, React } from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';
import NavBar from '../NavBar/NavBar';
import * as groupsAPI from "../../utilities/groups-api"
import NewGroupForm from '../../pages/NewGroupForm/NewGroupForm';
import './GroupList.css'
import { BiSearchAlt } from 'react-icons/bi';

export default function CatList({groups, setGroups, user, setUser}) {

    useEffect(function() {
        async function getGroups() {
          const groups = await groupsAPI.getAll();
          setGroups(groups);
        }
        getGroups();
      }, []);
    
   


      const [dciSel, setdciSel] = useState(false)
      const [wgiSel, setwgiSel] = useState(false)
      const [dcaSel, setdcaSel] = useState(false)
      const [allSel, setAllSel] = useState(false)
      const [mBandSel, setMBandSel] = useState(false)
      const [scIndoorSel, setScIndoorSel] = useState(false)
      const [searchField, setSearchField] = useState("");

      function scrollView() {
        const anchor = document.querySelector('#group-detail-page')
        anchor && anchor.scrollIntoView()
      }
      
      function handleChange(evt) {
          evt.preventDefault();
          setSearchField(evt.target.value);
        }
        const filteredGroup = groups.filter(g => {
            return(
                g.name.toLowerCase()
                .includes(searchField.toLowerCase()
                )
                )}
                );
                
        function checkGroups() {
            if (!filteredGroup) {
                return false
            }
        }
    const allGroups = filteredGroup.map((g, idx) => 
    <Link to={`/groups/${g._id}`} className="links">
        <div 
            onClick={scrollView}
            style={idx % 2 ? {backgroundColor:"white"}: {backgroundColor:"#e8e4e4"} }
            className="group-name">{g.name}
        </div>
    </Link>)    

    const dci = groups.filter(cat => cat.category === "DCI")
    const wgi = groups.filter(cat => cat.category === "WGI")
    const dca = groups.filter(cat => cat.category === "DCA")
    const mBand = groups.filter(cat => cat.category === "Marching Band")
    const scIndoor = groups.filter(cat => cat.category === "Scholastic/Indoor")
    
    

  
    return(
        <div className="main-nav">
            <div className="group-container">
                <h1 style={{ backgroundColor: allSel ? "black" : ""}}onClick={(evt) => setAllSel(prevAllSel => !prevAllSel)}>All Groups</h1>
                {allSel ? 
                <div className="all-groups">
                    <div className="search-container">
                    <div className="icon"><BiSearchAlt /></div>
                    <label className="field field_v3"> 
                        <input className="field__input" type="search" placeholder="Search by Name" onChange={handleChange}/>
                        <span className="field__label-wrap">
                            <span className="field__label">Search All Groups</span>
                        </span>
                    </label>
                    </div>
                    {allGroups}
                    {checkGroups()}
                </div>
                : <div></div>}
            </div>
            <div className="group-container">
                <h1 onClick={(evt) => setdciSel(prevDciSel => !prevDciSel) } >DCI</h1>
                <div >{dci.map((g, idx) => <GroupCard className="group-name" key={g.name} idx={idx} group={g} selected={dciSel}/>
                    )}</div>
            </div>
            
            <h1 style={{ backgroundColor: wgiSel ? "black" : ""}}onClick={(evt) => setwgiSel(prevWgiSel => !prevWgiSel) }>WGI</h1>
            {wgi.map((g, idx) => <GroupCard className="wgi-groups" idx={idx} key={g.name} group={g} selected={wgiSel}/>
                )}
            <h1 style={{ backgroundColor: dcaSel ? "black" : ""}}onClick={(evt) => setdcaSel(prevDcaSel => !prevDcaSel) }>DCA</h1>
            {dca.map((g, idx) => <GroupCard className="dca-groups" idx={idx} key={g.name} group={g} selected={dcaSel}/>
                )}
            <h1 style={{ backgroundColor: mBandSel ? "black" : ""}}onClick={(evt) => setMBandSel(prevmBandSel => !prevmBandSel) }>Scholastic/Marching Band</h1>
            {mBand.map((g, idx) => <GroupCard className="marching-band-groups" idx={idx} key={g.name} group={g} selected={mBandSel}/>
                )}
            <h1 style={{ backgroundColor: scIndoorSel ? "black" : ""}}onClick={(evt) => setScIndoorSel(prevscIndoorSel => !prevscIndoorSel) }>Scholastic/Indoor</h1>
            {scIndoor.map((g, idx) => <GroupCard className="scholastic-indoor-groups" idx={idx} key={g.name} group={g} selected={scIndoorSel}/>
                )}
            <Link to="/new-group"><h1 onClick={scrollView}>Add a Group</h1></Link>
            

                
        </div>
        )

    }