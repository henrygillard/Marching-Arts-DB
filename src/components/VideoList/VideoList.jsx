import ReactPlayer from "react-player";
import React from 'react';
import "./VideoList.css"

export default function VideoList({group, year}) {

    const videos = year.videoUrl.map(v => <ReactPlayer url={v}
        url={v}></ReactPlayer >)

    return(
        
        <div className="video-list">
            {videos}
        </div>
        
    )
    }

