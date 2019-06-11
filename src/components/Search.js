import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' className='search-bar' name='activity' placeholder='What do you want to do?' />
          <p>Near</p>
          <input type='text' className='search-bar' name='location' placeholder='Where are you?' />
          <button type='submit'>Search!</button>
        </form>
        
      </div>
    );
  }
}
 
export default Search