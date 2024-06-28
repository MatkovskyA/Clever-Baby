import "./_videoComponent.scss"

import React, { useState } from 'react';

const VideoComponent = () => {
    const [isReady, setReady] = useState(false);
    
    const handleVideoClick = () => {
        if (isReady) {
            return;
        }
        setReady(true);
    };

    return (
        <div className={`aboutLearning-video ${isReady ? 'ready' : ''}`} onClick={handleVideoClick}>
            {isReady && (
                <iframe 
                    src="https://www.youtube.com/embed/6BEyP_x6yls?si=BwiX1FWG1TwjM2q4" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default VideoComponent;
