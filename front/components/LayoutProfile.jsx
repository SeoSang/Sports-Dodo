import React from "react"
import { dummy_me } from "../src/dummy.js"
import { Button } from "antd"
import Link from "next/link"

export const MyProfile = (
  <div>
    <h2>{dummy_me?.email}</h2>
    <h3>{dummy_me?.nickname + "님"}</h3>
    <p>Point : 356p</p>
    <p>랭킹 : 777위</p>
    <Button style={{ margin: "5px" }}>
      <Link href='./profile'>
        <a>자세히</a>
      </Link>
    </Button>
    <Button style={{ margin: "5px" }}>로그아웃</Button>
  </div>
)

export const NullProfile = (
  <div>
    <h2>로그인이</h2>
    <h2>필요합니다</h2>
    <div>
      <Button style={{ margin: "5px" }}>
        <Link href='./login'>
          <a>로그인</a>
        </Link>
      </Button>
      <Button style={{ margin: "5px" }}>
        <Link href='./register'>
          <a>회원가입</a>
        </Link>
      </Button>
    </div>
  </div>
)
