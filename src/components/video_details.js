import React from 'react';
const Videodetails=(props)=>
{
	if(!props.vid)
	{
		return <div>Loading...</div>
	}
	const videoid=props.vid.id.videoId;
	
	const url=`https://www.youtube.com/embed/${videoid}`;
	return(
		<div>
		<div className="video-detail">
           <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
              <div>{props.vid.snippet.title}</div>
              <div>{props.vid.snippet.description}</div>
            </div>

		</div>
         </div>

		);
}

export default Videodetails;