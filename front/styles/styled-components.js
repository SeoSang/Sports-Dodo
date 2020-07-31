import styled from "styled-components"
import { Button } from "antd"

// _app 에서 쓰임
export const TitleBarDiv = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: #001529;
  padding: 2px;
`

export const ContentDiv = styled.div`
  background-color: #d1ccc0;
  height: 80vh;
  border: 1px solid #d1ccc0;
`

// 기타
export const Background90Div = styled.div`
  height: 90vh;
  padding: 5vh;
  background-color: #84817a;
`
export const UpperDiv = styled.div`
  padding: 3px;
  margin: 1vh 3vw;
  height: 32vh;
  background-color: #dcdcdc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const LowerDiv = styled.div`
  padding: 3px;
  margin: 4vh 3vw;
  background-color: #dcdcdc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const FullDiv = styled.div`
  padding: 3px;
  margin: 1vh 3vw;
  height: 70vh;
  background-color: #dcdcdc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`

// TODO : 왜 important 안쓰면 적용이 안될까?
export const SportCategories = styled(Button)`
  cursor: pointer;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-radius: 5px;
  height: 10vh !important;
`
