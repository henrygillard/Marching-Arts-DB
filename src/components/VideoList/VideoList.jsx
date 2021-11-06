import ReactPlayer from "react-player";
import React from 'react';
import "./VideoList.css"

export default function VideoList({group, year}) {

    const videos = year.videoUrl.map(v => <ReactPlayer width="100%" height="100%" url={v}
        url={v}></ReactPlayer >)

    return(
        
        <div className="video-list">
            {videos}
        </div>
        
    )
    }

