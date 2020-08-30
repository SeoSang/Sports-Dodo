<<<<<<< HEAD
import React from "react"

import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableContainer from "@material-ui/core/TableContainer"

// import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  table: {
    marginLeft: 100,
    minWidth: 650,
    maxWidth: 1000,
  },
  test: {
    border: 0,
    borderRadius: 3,
    padding: 48,
    // maxWidth: 1100,
    minWidth: 650,
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

function Match({ matchid, teamA, teamB, match_date }) {
  return (
    <TableRow key={matchid}>
      <TableCell align='right' component='th' scope='row'>
        {matchid}
      </TableCell>
      <TableCell align='right'>
        {teamA}VS{teamB}
      </TableCell>
      <TableCell align='right'>{match_date}</TableCell>
      <TableCell align='right'>
        <div className='root'>
          <Button color='secondary'>배당</Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

Match.propTypes = {
  matchid: PropTypes.number.isRequired,
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  match_date: PropTypes.string.isRequired,
}
=======
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
>>>>>>> a4654feb147117dd091c69587335f0e17afb4a98

export default Match
