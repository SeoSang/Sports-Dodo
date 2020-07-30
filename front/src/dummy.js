// 아직 서버로부터 데이터를 전달받지 않으니
// 더미 데이터 형식을 미리 만들어 두었습니다.

export const dummy_me = {
  email: "scscsc@naver.com",
  nickname: "김건모",
}

export const dummy_match_A = {
  teamA: "토트넘",
  teamB: "아스날",
  time: new Date(),
  battings: [],
}
export const dummy_match_B = {
  teamA: "토트넘",
  teamB: "아스날",
  time: new Date(),
  battings: [],
}
export const dummy_match_C = {
  teamA: "토트넘",
  teamB: "아스날",
  time: new Date(),
  battings: [],
}

export const dummy_main_mathes = [dummy_match_A, dummy_match_B, dummy_match_C]

export const dummy_ranking_A = {
  event: "축구",
  rankings: ["토트넘", "손흥민", "박지성", "김홍길", "동임꺽"],
}
export const dummy_ranking_B = {
  event: "야구",
  rankings: ["김현수", "야구의왕", "내이름", "은바로", "김상순"],
}
export const dummy_ranking_C = {
  event: "농구",
  rankings: ["마이클", "조던", "서장훈", "김홍길", "동임꺽"],
}

export const BACKEND_URL = "http://localhost:12312"
