import React from 'react';

const VideolistItem=(props)=>
{
	
	const imgUrl=props.vid.snippet.thumbnails.default.url;
   return( 
   	<li onClick={()=>props.onvideoselect(props.vid)} className="list-group-item" >
	   	<div className="video-list media">
		   	<div className="media-left">
	         <img className="media-object" src={imgUrl}/>
		   	</div>
		   	<div className="media-body">
	           <div className="media-heading">{props.vid.snippet.title}</div>
		   	</div>
	   	</div>
   	</li>);
}
export default VideolistItem;