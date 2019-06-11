import React, { Component } from "react";
import { searchActivities } from "../actions/activities"
import { connect } from "react-redux"; 

class Search extends Component {
  state = {
    activity: '',
    location: ''
  }
  handleSubmit = () => {
    this.props.searchActivities(this.state.activity, this.state.location);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  componentWillMount = () => {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='search-bar' name='activity' placeholder='What do you want to do?' value={this.state.activity} onChange={this.handleChange} />
          <p>Near</p>
          <input type='text' className='search-bar' name='location' placeholder='Where are you?' value={this.state.location} onChange={this.handleChange} />
          <input type='submit' value="Submit" />
        </form>
        
      </div>
    );
  }
}



const mapStateToProps = state => ({
  activities: state.activities.activities
});
const mapDispatchToProps = {
  searchActivities
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
