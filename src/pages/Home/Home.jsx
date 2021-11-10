import React from "react";
import "./Home.css"


export default function Home() {

    return (
    <div className="group-detail-page" id="group-detail-page">
        <div className="welcome">
        <h1>Home</h1>
            <div>
                <p>Welcome to Marching Arts Database! Currently,
                    this web app is able to sign up a user and upload
                    their favorite marching arts videos!
                    <hr/>
                    To get started, select a group from a marching arts category
                    in the navbar or search for a group under the all groups 
                    tap. If you want to submit a group that hasn't been listed 
                    or upload a new video for a group, you must create an account. 
                    It's free and easy!
                </p>
            </div>
        </div>
    </div>
    )
        
}