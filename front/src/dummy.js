// 아직 서버로부터 데이터를 전달받지 않으니
// 더미 데이터 형식을 미리 만들어 두었습니다.

export const dummy_me = {
  email: "scscsc@naver.com",
  nickname: "김건모",
};

export const dummy_match_A = {
  event: "축구",
  teamA: "토트넘",
  teamB: "아스날",
  time: new Date(),
  battings: [],
};
export const dummy_match_B = {
  event: "야구",
  teamA: "한화",
  teamB: "두산",
  time: new Date(),
  battings: [],
};
export const dummy_match_C = {
  event: "농구",
  teamA: "마이클조던",
  teamB: "서장훈",
  time: new Date(),
  battings: [],
};

export const dummy_main_matches = [
  new Array(3).fill(dummy_match_A),
  new Array(3).fill(dummy_match_B),
  new Array(3).fill(dummy_match_C),
].reduce((arr1, arr2) => arr1.concat(arr2));

export const dummy_ranking_A = {
  event: "축구",
  rankings: ["토트넘", "손흥민", "박지성", "김홍길", "동임꺽"],
};
export const dummy_ranking_B = {
  event: "야구",
  rankings: ["김현수", "야구의왕", "내이름", "은바로", "김상순"],
};
export const dummy_ranking_C = {
  event: "농구",
  rankings: ["마이클", "조던", "서장훈", "김홍길", "동임꺽"],
};

export const dummy_main_rankings = [
  dummy_ranking_A,
  dummy_ranking_B,
  dummy_ranking_C,
];

export const BACKEND_URL = "http://localhost:12312";

export const dohan_db = [
  {
    posts: [
      {
        _id: 1,
        homeTeam: "아스날",
        awayTeam: "리버풀",
        totalPoint: 50,
        startTime: "2020-08-01 01:00:00",
        result: "",
      },
      {
        _id: 2,
        homeTeam: "맨유",
        awayTeam: "맨시티",
        totalPoint: 40,
        startTime: "2020-08-01 01:00:00",
        result: "",
      },
      {
        _id: 3,
        homeTeam: "레스터",
        awayTeam: "에버튼",
        totalPoint: 100,
        startTime: "2020-08-02 01:00:00",
        result: "",
      },
      {
        _id: 4,
        homeTeam: "레스터",
        awayTeam: "에버튼",
        totalPoint: 10,
        startTime: "2020-08-02 01:00:00",
        result: "",
      },
      {
        _id: 5,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
        result: "",
      },
      {
        _id: 6,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 7,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 8,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 9,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
      {
        _id: 10,
        homeTeam: "레스터",
        awayTeam: "에버튼",

        startTime: "2020-08-02 01:00:00",
      },
    ],
    comments: [{ id: 1, body: "some comment", postId: 1 }],
    profile: { name: "typicode" },
  },
];
