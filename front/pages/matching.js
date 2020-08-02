import React, { useState, useEffect } from "react";
import axios from "axios";
import Match from "./Match";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

//npm i json-server
//node server.js
// 가까운 시간순서
const url = "http://localhost:80/posts?_sort=match_date&_order=ASC";

function matching() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(url);
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        // console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  console.log(users.data);
  //   console.log(users.data?.matchs);
  //   console.log(loading);
  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>팀</TableCell>
              <TableCell>경기시간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((data) => {
              return (
                <Match
                  key={data.matchid}
                  matchid={data.matchid}
                  teamA={data.teamA}
                  teamB={data.teamB}
                  match_date={data.match_date}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default matching;
