import React from 'react'


const VideoLink  = {
    url : "https://www.youtube.com/watch?v=QdezFxHfatw",
    videoName: 
    "defently not a rickroll ",
    hashtag: " #rick ashely ",
};
const VideoPlayer = () => {
  return (
    <div>
        <iframe title='video' width="900" height="506" src={ VideoLink.url}  > </iframe>
        <p style={{color:"blue" ,  }} >{VideoLink.hashtag}</p>
        <h3>{VideoLink.videoName}</h3>

    </div>
  )
}

export default VideoPlayer



