import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Match({ matchid, teamA, teamB, match_date }) {
  return (
    <div className="matchs">
      <Link
        to={{
          pathname: `/match/${matchid}`,
          state: {
            teamA,
            teamB,
            match_date,
          },
        }}
      >
        <div className="match__data">
          <h3 className="match__title">
            {teamA}vs{teamB}
          </h3>
          <h5 className="match_date">{match_date}</h5>
          {/* <ul className="match_team">
            {team.map((team, index) => (
              <li key={index} className="team">
                {team}
              </li>
            ))}
          </ul> */}
        </div>
      </Link>
    </div>
  );
}

Match.propTypes = {
  matchid: PropTypes.number.isRequired,
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  matchdate: PropTypes.string.isRequired,
};

export default Match;
