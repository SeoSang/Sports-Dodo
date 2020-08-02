import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";

function Match({ matchid, teamA, teamB, match_date }) {
  return (
    <>
      <div className="match">
        <TableRow>
          <TableCell>{matchid}</TableCell>
          <TableCell>
            {teamA}VS{teamB}
          </TableCell>
          <TableCell>{match_date}</TableCell>
        </TableRow>
      </div>
    </>
  );
}

Match.propTypes = {
  matchid: PropTypes.number.isRequired,
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  match_date: PropTypes.string.isRequired,
};

export default Match;
