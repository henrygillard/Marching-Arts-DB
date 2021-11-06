import { useState } from "react"
import React from 'react';
import * as groupAPI from "../../utilities/groups-api"
import "./NewGroupForm.css"

export default function NewGroupForm({groups, setGroups, user}) {

    const [groupData, setGroupData] = useState({
        name: "",
        category: "DCI",
        videoUrl: "",
    });
    const [selected, setSelected] = useState(false)
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
        setError("");
      }

    async function handleSubmit(evt) {
        evt.preventDefault();
        if(user){
        try {
           const newGroup = await groupAPI.create(groupData);
           setGroups([...groups, newGroup]);
           setMessage("Group Added Successfully!")

        } catch {
                console.log("group already exists")
                setError("Group Already Exists!")
        }
    } else {
        setError("Please log in to create new groups!")
    }
    }
    
    return(
        <>
        <h1 onClick={(evt) => setSelected(prevSelected => !prevSelected)}style={{ backgroundColor: selected ? "black" : ""}}>{selected ? `- Add a Group` : `+ Add a Group`}</h1>
        <p className="error-message">{error}</p>
        <p className="success-message">{message}</p>
        {selected  ? 
        <form className="form-container" onSubmit={handleSubmit}>
            <label className="field field_v3">
                    <input className="field__input" 
                        placeholder="e.g. West HS"
                        type="text" 
                        name="name" 
                        value={groupData.name}
                        required
                        onChange={handleChange}
                    />
                    <span className="field__label-wrap">
                        <span className="field__label">Group Name</span>
                    </span>
                </label>
            <div className="category-field">
                <div>Category</div>
                <select
                name="category"
                value={groupData.category}
                required
                onChange={handleChange}
                > 
                <option value="DCI">DCI</option>
                <option value="WGI">WGI</option>
                <option value="DCA">DCA</option>
                <option value="Marching Band">Scholastic/Marching Band</option>
                <option value="Scholastic/Indoor">Scholastic/Indoor</option>
                </select>
            </div>
            <label className="field field_v3">
                    <input className="field__input" 
                        placeholder="Youtube Link"
                        type="text" 
                        name="videoUrl"
                        value={groupData.videoUrl}
                        required
                        onChange={handleChange}
                    />
                    <span className="field__label-wrap">
                        <span className="field__label">Video URL</span>
                    </span>
                </label>
            <button className="submit" type="submit">+ ADD GROUP</button>
        </form>
        : <div>
        </div>}
        </>

    )
}