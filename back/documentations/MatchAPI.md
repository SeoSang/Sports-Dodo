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
    result: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Result'
    },
    startTime: {
        type: Date,
        required: true
    },
    // info 는 더 논의해봐야할듯함.
    // infos: 
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
    "startTime": "06:23:24/09/12/2020"
}
```

__Response__
```
{
    "success": true,
    "data": {
        "_id": "sdhflkjkle35dklfsjdflk22dshfkl",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "06:23:24/09/12/2020",
        "result": ""
    }
}
```

<br>

## __매치 읽기 (복수)__ GET "/api/match"
- 임박한 경기순서로 검색 'startTime[gt]=Date.now'
- 보여주고 싶은 경기 개수 설정 'limit' ex) 3개 설정시 => "/api/match/?limit=3"
- 정렬 방식 설정 'sort' ex) "/api/match?sort=startTime,_id"

__Request__
```
method: GET
url: "/api/match"
header: { 
    "Content-Type": "application/json" 
}
```

__Response__
```
{
    "success": true,
    "data": [
    {
        "_id": "dsfhewikotiewjoir22bsdfnlewnf",
        "homeTeam": "Chicago",
        "awayTeam": "SA",
        "startTime": "06:23:24/09/12/2020",
        "result": ""
    },
    {
        "_id": "sdhflkjkle35dklfsjdflk22dshfkl",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "06:20:22/10/12/2020",
        "result": ""
    },
    {
        "_id": "sdhflkjkle35dklfsjdflk22dshfkl",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "06:20:22/10/12/2020",
        "result": ""
    }]
}
```


### 매치 읽기 (복수) 예시
- 가장 임박한 경기 10개 가져오기
- 정렬 기준: startTime / 검색기준 : startTime > Date.now / 가져올 개수: limit = 10

__Request__
```
"/api/match?sort=startTime&startTime[gt]=Date.now&limit=10"
```

__Response__
```
{
    "success": true,
    "count": 10,
    "data": [
        {
            "_id": "5f4343b4df4b39448893e1d9",
            "homeTeam": "TeamC",
            "awayTeam": "TeamB",
            "startTime": "2018-08-11T16:33:00+00:00",
            "__v": 0
        },
        {
            "_id": "5f4343c0df4b39448893e1da",
            "homeTeam": "TeamA",
            "awayTeam": "TeamD",
            "startTime": "2018-08-11T16:34:00+00:00",
            "__v": 0
        },
        {},
        ~,
        {
            "_id": "5f4343c5df4b39448893e1db",      // 더보기 할 때 필요합니다.
            "homeTeam": "TeamA",
            "awayTeam": "TeamD",
            "startTime": "2018-08-11T16:35:00+00:00",    // 더보기 할 때 필요합니다.
            "__v": 0
        }
    ]
}
```

### 매치 더보기 "loadMore" 예시
- 정렬 기준: startTime / 검색기준 : startTime > startTimeOfLastContent, _id > _idOfLastContent / 가져올 개수 : limit = 10
- 동일 시간에 여러 경기가 있을 수 있어 _id 도 검색 조건에 들어갸야함.(_id가 디폴트로 설정된 두번째 정렬조건입니다.)
- 위 임박한 경기 10개 가져오는 쿼리의 response 에서 마지막 content의 startTime과 _id를 이용해야합니다.

__Request__
```
"/api/match?sort=startTime&startTime[gt]=startTimeOfLastContent&_id[gt]=_idOfLastContent&limit=10
```

__Response__
```
{
    "success": true,
    "count": 2,
    "data": [
        {
            "_id": "5f3b6f872e0ff61fac3c7745",
            "homeTeam": "Fulham",
            "awayTeam": "Crystal Palace",
            "startTime": "2018-08-11T14:00:00+00:00",
            "__v": 0
        },
        {
            "_id": "5f3b6f872e0ff61fac3c7746",
            "homeTeam": "Huddersfield",
            "awayTeam": "Chelsea",
            "startTime": "2018-08-11T14:00:00+00:00",
            "__v": 0
        }
    ]
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
        "_id": "sdhflkjkle35dklfsjdflk22dshfkl",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "06:23:24/09/12/2020",
        "result": ""
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
    "startTime": "12:21:20/01/01/20"
}
```

__Response__
```
{
    "success": true,
    "data": {
        "_id": "sdhflkjkle35dklfsjdflk22dshfkl",
        "homeTeam": "LA",
        "awayTeam": "Taxas",
        "startTime": "12:21:20/01/01/20",
        "result": ""
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