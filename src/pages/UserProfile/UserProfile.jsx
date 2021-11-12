import * as userAPI from "../../utilities/users-api"
import * as groupsAPI from "../../utilities/groups-api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function UserProfile({user, setGroups, groups}) {

    useEffect(function() {
        async function getGroups() {
          const groups = await groupsAPI.getAll();
          setGroups(groups);
        }
        getGroups();
      }, []);

    const [thisUser, setThisUser] = useState();

    const id = user._id

    useEffect(function () {
        async function getUser() {
            const currentUser = await userAPI.getUser(id);
            setThisUser(currentUser);
        }
        getUser();
    }, [id]);

    
    const filterByUser = groups.filter(g => g.user._id === id)
    function test() {
        console.log(filterByUser)
    }

    return (
        
        <div>
            <h1>User Profile Page</h1>
            <div className="profile-info">
                <div>username: {thisUser && thisUser.name}</div>
            </div>
            <div className="profile-info">
                <div>email: {user.email}</div>
            </div>
            <div className="profile-info">
                <div>groups: {filterByUser.map((g, idx) => 
                    <div><Link to={`/groups/${g._id}`}>{g.name}</Link></div>)}
                </div>
            </div>
        </div>
    )
}