import React, { Component } from "react";
import { searchActivities } from "../actions/activities"
import { connect } from "react-redux"; 
/* global google */

class Results extends Component {
  state = {

  }


  componentWillMount = () => {
    console.log(this.props);
  }

  

  render() {
    return (
      <li>{this.props.item.name}</li>
    );
  }
}



const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  searchActivities
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
