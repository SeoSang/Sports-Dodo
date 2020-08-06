import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

// import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";

function Match({ _id, homeTeam, awayTeam, startTime, totalPoint, result }) {
  const [test, getTest] = useState([]);
  return; // <div></div>
}

Match.propTypes = {
  _id: PropTypes.number.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  totalPoint: PropTypes.number.isRequired,
  result: PropTypes.string.isRequired,
};

export default Match;
