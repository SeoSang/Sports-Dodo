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
        "_id": "dsfhewikotiewjoir22bsdfnlewnf",
        "homeTeam": "Chicago",
        "awayTeam": "SA",
        "startTime": "06:10:24/09/12/2020",
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
        "startTime": "06:20:23/10/12/2020",
        "result": ""
    }]
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