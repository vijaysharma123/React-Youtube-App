import React from 'react';
import VideolistItem from './video_list_item';
const Videolist=(props)=>
{
	console.log(props);
   const videoItems=props.videos.map((videos)=>
   	{
       return <VideolistItem onvideoselect={props.onvideoselect} key={videos.etag} vid={videos}/>
   	});
   
   return (
	   	      <ul className="list-item">
	          {videoItems}  
	          </ul>
           );
}

export default Videolist; 