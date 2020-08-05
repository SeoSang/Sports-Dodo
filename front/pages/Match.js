import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

// import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";

function Match({ matchid, teamA, teamB, match_date }) {
  return <div></div>;
}

Match.propTypes = {
  matchid: PropTypes.number.isRequired,
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  match_date: PropTypes.string.isRequired,
};

export default Match;
