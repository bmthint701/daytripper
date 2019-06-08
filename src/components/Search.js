import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' className='search-bar' name='location' placeholder='Location' />
        </form>
        
      </div>
    );
  }
}
 
export default Search