// 아직 서버로부터 데이터를 전달받지 않으니
// 더미 데이터 형식을 미리 만들어 두었습니다.

import Home from '../pages';

export const dummy_me = {
  email: 'scscsc@naver.com',
  nickname: '김건모',
};

export const dummy_match_A = {
  category: '축구',
  teamA: '토트넘',
  teamB: '아스날',
  time: new Date(),
  battings: [],
};
export const dummy_match_B = {
  category: '야구',
  teamA: '한화',
  teamB: '두산',
  time: new Date(),
  battings: [],
};
export const dummy_match_C = {
  category: '농구',
  teamA: '마이클조던',
  teamB: '서장훈',
  time: new Date(),
  battings: [],
};

export const dummy_main_matches = [
  new Array(3).fill(dummy_match_A),
  new Array(3).fill(dummy_match_B),
  new Array(3).fill(dummy_match_C),
].reduce((arr1, arr2) => arr1.concat(arr2));

export const dummy_ranking_A = {
  category: '축구',
  rankings: ['토트넘', '손흥민', '박지성', '김홍길', '동임꺽'],
};
export const dummy_ranking_B = {
  category: '야구',
  data: [
    { nickname: '김현수' },
    { nickname: '김광현' },
    { nickname: '마동석' },
    { nickname: '홀라러' },
    { nickname: '류현진' },
  ],
};
export const dummy_ranking_C = {
  category: '농구',
  data: [
    { nickname: '김치국' },
    { nickname: '조던' },
    { nickname: '샤킬오닐' },
    { nickname: '서장훈' },
    { nickname: '김치2' },
  ],
};

export const dummy_main_rankings = [dummy_ranking_B, dummy_ranking_C];

export const dummy_profile = {
  id: 'asd',
  email: 'david@naver.com',
  nickname: '김데입',
  name: '데이비드',
  point: 1250,
  battings: [
    {
      select: 'win',
      point: 100,
      match: { homeTeam: '수원삼성', awayTeam: '전북현대' },
      result: {
        matchResult: 'win',
        reward: 250,
      },
    },
    {
      select: 'lose',
      point: 200,
      match: { homeTeam: '첼시', awayTeam: '맨유' },
      result: {
        matchResult: 'win',
        reward: 300,
      },
    },
    {
      select: 'draw',
      point: 150,
      match: { homeTeam: '한국', awayTeam: '브라질' },
      result: {
        matchResult: 'win',
        reward: 350,
      },
    },
  ],
};
