import React, { Component } from "react";
import { connect } from "react-redux";
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        {/* <h2>Where do you want to go?</h2> */}
      </div>
    );
  }
}
 
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  // startApplication,
  // createSubscription
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);