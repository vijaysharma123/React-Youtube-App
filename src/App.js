import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import Videolist from './components/video_list';
import Videodetails from './components/video_details';
import YTSearch from 'youtube-api-search';
import Footer from './components/footer';
import _ from 'lodash';
const Api_Key="AIzaSyAkHX6-zUzpO25tG3EAU2AjTA0QQj2keDw";

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={
      videos:[],
      selectedvideo:null
    }
    
   this.onvideosearch('sandeep maheswari');
  }
  onvideosearch(term)
  {
    YTSearch({ key: Api_Key, term:term}, (video) => {
        this.setState( {videos:video,selectedvideo:video[0]})

    });
     
  }
  render() {
    const style={
      width:'100%'
    }
    const videosearch=_.debounce((term)=>{this.onvideosearch(term)},800);
    return(

      <div>
      
      <SearchBar ontermchange={videosearch}/>
       <div className="row" style={style}>
       <div className="col-md-8 video">
       <Videodetails  vid={this.state.selectedvideo}/>
       </div>
       <div className="col-md-4 list">
       <Videolist  onvideoselect={(selectedvideo)=>this.setState({selectedvideo:selectedvideo})} videos={this.state.videos}/>
       </div>      
       <Footer/>
       </div>
      </div>
      )
  }
}

export default App;
