# APIS
```
POST "/api/match"             매치 생성
GET  "/api/match"             매치 읽기 (복수)
GET  "/api/match/:id"         매치 읽기 (단일)
PUT  "/api/match/:id"         매치 수정
DELETE "/api/match/:id"       매치 삭제
```
<br>

# Match Model Schema
```js
var MatchSchema = mongoose.Schema({
    homeTeam: {
        type: String,
        required: true,
    },
    awayTeam: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    finishTime: {
        type: String,
    },
    idForFAPI: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Not Started', 'Match Finished'],
        default: 'Not Started'
    },
    goalsHomeTeam: { // homeTeamScore 변경
        type: Number,
        default: 0
    },
    goalsAwayTeam: { // awayTeamScore 변경
        type: Number,
        default: 0
    },
    result: {
        type: String,
        enum: ['Home', 'Away', 'Draw', 'Not Finished'],
        default: 'Not Finished'
    }
});
```

<br>

# API spec
## __매치 생성__ POST "/api/match/"
__Request__
```
method: POST
url: "api/match/createMatch"
header: { 
    "Content-Type": "application/json", 
    "x-access-token": "token value" 
}
body: {
    "homeTeam": "LA",
    "awayTeam": "Taxas",
    "startTime": "2020-09-12T07:30:00+00:00"
}
```

__Response__
```
{
            "status": "Not Started",
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "result": "Not Finished",
            "_id": "5f4a3e2c60d7215bd4bd330f",
            "homeTeam": "LA",
            "awayTeam": "Taxas",
            "startTime": "2020-09-12T07:30:00+00:00",
            "idForFAPI": 490814,
            "finishTime": "2020-09-12T09:20:00.000Z",
            "__v": 0
        },
```

<br>

## __매치 읽기 (복수)__ GET "/api/match"

__Request__
```
// 첫번째 request
method: GET
url: "/api/match"   "/api/match?startTime[gt]={Date.now}"
header: { 
    "Content-Type": "application/json" 
}
```

```
// 더보기 request
method: GET
url: "/api/match?startindex={startIndex}"
header: { 
    "Content-Type": "application/json" 
}
```

### 매치 읽기 (복수) 검색 조건
- query
  - startindex  ex) ?startindex=3  => 3번째 객체부터 보여줌. default=0 
  - sort        ex) ?sort=_id  (default=startTime,_id)
  - limit       ex) ?limit=3

__Request__
```

```

__Response__
```
{
    "success": true,
    "count": 10
    "nextStartIndex": 10,           //state 저장 !
    "hasNext": true,                //state 저장 !
    "data": [
    {
        "status": "Not Started",
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "result": "Not Finished",
        "_id": "5f4cba9637b25e16105a6b5a",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "2020-08-31T18:05:00+00:00",
        "finishTime": "2020-08-31T19:55:00.000Z",
        "howManyPeopleBatted: 1,
        "__v": 0
    },
    {
        "status": "Not Started",
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "result": "Not Finished",
        "_id": "5f4a3e2c60d7215bd4bd330e",
        "homeTeam": "Gangwon FC",
        "awayTeam": "Pohang Steelers",
        "startTime": "2020-09-12T07:30:00+00:00",
        "idForFAPI": 490813,
        "finishTime": "2020-09-12T09:20:00.000Z",
        "howManyPeopleBatted: 1,
        "__v": 0
    },]
}
```

<br>

## __매치 읽기 (단일)__  GET  "/api/match/:id"
__Request__
```
method: GET
url: "/api/match/:id"
header: { 
    "Content-Type": "application/json" 
}
```

__Response__
```
{
    "success": true,
    "data": {
        "status": "Not Started",
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "result": "Not Finished",
        "_id": "5f4cba9637b25e16105a6b5a",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "2020-08-31T18:05:00+00:00",
        "finishTime": "2020-08-31T19:55:00.000Z",
        "howManyPeopleBatted: 1,
        "__v": 0
    }
}
```
<br>

## __매치 수정__ PUT  "/api/match/:id"
__Request__
```
method: PUT
url: "/api/match/:id"
header: { 
    "Content-Type": "application/json", 
    "x-access-token": "token value" 
}
body: {
    "startTime": "2020-08-31T18:05:00+00:00"
}
```

__Response__
```
{
    "success": true,
    "data": {
        "status": "Not Started",
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "result": "Not Finished",
        "_id": "5f4cba9637b25e16105a6b5a",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "2020-08-31T18:05:00+00:00",   // changed
        "finishTime": "2020-08-31T19:55:00.000Z",
        "howManyPeopleBatted: 1,
        "__v": 0
    }
}
```
<br>

## __매치 삭제__ DELETE "/api/match/:id"
__Request__
```
method: DELETE
url: "/api/match/:id"
header: { 
    "Content-Type": "application/json", 
    "x-access-token": "token value" 
}
```

__Response__
```
{
    "success": true,
    "data": ""
}
```