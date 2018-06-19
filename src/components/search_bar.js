import React,{Component}from 'react';
class SearchBar extends Component
{
state={
	term:''
}

   render()
   {
    
    return(
      <div>        
        <nav className="navbar navbar-expand-sm bg-light">
           
          <a className="navbar-brand" href="#"><i className="fab fa-youtube"></i><h4>YouTube</h4></a>

               <input placeholder="Search Here.." onChange={event=>this.onInputchange(event.target.value)}/>
              
              <h3>ReactApp</h3>
                
          
         </nav>

       
     </div>
    	)
   }
   onInputchange=(term)=>
   {
    this.setState({term:term});
    this.props.ontermchange(term);
   }
}

export default SearchBar;