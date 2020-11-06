import styled from 'styled-components';
import { Button } from 'antd';

export const FlexDiv = styled.div`
  display: ${(props) => props.flex || 'flex'};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  background-color: ${(props) => props.backgroundColor || 'auto'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`;

// _app 에서 쓰임
export const TitleBarDiv = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: #001529;
  padding: 2px;
`;

export const ContentDiv = styled.div`
  background-color: #e8e8e8;
  min-height: 100vh;
  border: 1px solid white;
`;

// 기타
export const Background100Div = styled.div`
  padding-top: 50px;
  height: calc(100vh - 50px);
  background-color: white;
`;
export const UpperDiv = styled.div`
  padding: 3px;
  margin: 0.2vh 1vw;
  margin-top: 1vh;
  height: 35vh;
  background-color: #f6f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const LowerDiv = styled.div`
  padding: 3px;
  margin: 2vh 3vw;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FullDiv = styled.div`
  padding: 3px;
  margin: 1vh 3vw;
  width: 80vw;
  background-color: #dcdcdc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;

// TODO : 왜 important 안쓰면 적용이 안될까?
export const SportCategories = styled(Button)`
  width: 100%;
  height: 10vh !important;
  cursor: pointer;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-radius: 5px;
  span {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const COLOR_1 = '#64798C';
export const COLOR_2 = '#2E3740';
export const COLOR_3 = '#B6DBF2';
export const COLOR_4 = '#CEE8F2';
export const COLOR_5 = '#0D0D0D';
