import React from "react";

function VideoCard({image, title}){
    return (
        <div>
            <img src={image} alt="" width="100"/>
            <div className="video-info">
                <div className="video-names">
                    <h3> {title} </h3>
                </div>
            </div>
        </div>
    );
}
export default VideoCard;