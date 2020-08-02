import React from "react";
import axios from "axios";
import Match from "./Match";

class matching extends React.Component {
  state = {
    matchs: [],
  };

  getApi = async () => {
    const {
      data: {
        data: { matchs },
      },
    } = await axios.get(
      "file:///C:/Users/ehgks/Desktop/project/score____temp/front/src/dummy_match.json"
    );
    this.setState({ matchs });
  };
  componentDidMount() {
    this.getApi();
  }

  render() {
    const { matchs } = this.state;
    return (
      <>
        <div>asdf</div>
        <div className="match">
          {matchs.map((match) => {
            <Match
              key={match.matchid}
              matchid={match.matchid}
              teamA={match.teamA}
              teamB={match.teamB}
              match_date={match.match_date}
            />;
          })}
        </div>
      </>
    );
  }
}

export default matching;
