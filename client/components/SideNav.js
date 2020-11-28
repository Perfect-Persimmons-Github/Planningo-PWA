import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/SideNav.css";

const SideNav = ({ handleClick, isLoggedIn, firstName }) => (
  <div className="sidenav-wrapper">
    <div id="logo">
      <Link to="/home">Home</Link>
    </div>
    {isLoggedIn ? (
      <React.Fragment>
        <div id="myTools">
          <h3>My Tools</h3>
          <Link to="/tasks">Tasks</Link>
          <Link to="/grocery">Groceries</Link>
        </div>
        <div className="accountlinks">
          <Link to="/groups">My Groups</Link>

          <Link to="/account">My Account</Link>

          <a href="#" onClick={handleClick}>
            Sign Out
          </a>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className="accountlinks">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </React.Fragment>
    )}
  </div>
);

const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(SideNav);

SideNav.propTypes = {
  firstName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};