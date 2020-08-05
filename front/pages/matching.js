import React, { useState, useEffect } from "react"
import axios from "axios"
import Match from "./Match"

import { makeStyles, styled, withStyles, Typography } from "@material-ui/core/styles"

import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableContainer from "@material-ui/core/TableContainer"
import Button from "@material-ui/core/Button"

import { AlignCenterOutlined } from "@ant-design/icons"
import { dummy_main_matches } from "../src/dummy"
//material-ui 사용
//https://material-ui.com/components/tables/
//https://material-ui.com/styles/basics/

// const useStyles = makeStyles({
//   table: {
//     marginLeft: 100,
//     minWidth: 650,
//     maxWidth: 1000,
//   },
//   test: {
//     border: 0,
//     borderRadius: 3,
//     padding: 48,
//     // maxWidth: 1100,
//     minWidth: 650,
//   },
// });
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

//npm i json-server
//node server.js
// 가까운 시간순서
const url = "http://localhost:80/posts?_sort=match_date&_order=ASC"

function matching() {
  const classes1 = useStyles()
  // const classes2 = StyledTableCell();

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null)
        setUsers(null)
        // loading 상태를 true 로 바꿉니다.
        setLoading(true)
        const response = await axios.get(url)
        setUsers(response.data) // 데이터는 response.data 안에 들어있습니다.
        // console.log(response.data);
      } catch (e) {
        // setError(e)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  //   if (!users) return null

  //   console.log(users.data)
  //   console.log(users.data?.matchs);
  //   console.log(loading);
  return (
    <TableContainer className={classes1.test} component={Paper}>
      <Table className={classes1.table} aria-label='simple table'>
        <TableHead>
          {/* className={classes2.head} */}
          <TableRow>
            <TableCell align='right'>번호</TableCell>
            <TableCell align='right'>팀</TableCell>
            <TableCell align='right'>경기시간</TableCell>
            <TableCell align='right'>배당</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummy_main_matches.map((data) => {
            return (
              <Match
                key={data.matchid}
                matchid={data.matchid}
                teamA={data.teamA}
                teamB={data.teamB}
                match_date={data.match_date}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default matching
