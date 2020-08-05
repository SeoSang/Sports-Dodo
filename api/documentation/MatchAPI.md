# APIS
```
POST "/api/match/createMatch"
GET  "/api/match/getMatchs"
GET  "/api/match/getMatch"
PUT  "/api/match/editMatch"
DELETE "/api/match/deleteMatch"
```

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

# API spec
## __POST__ "/api/match/createMatch"
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
## __GET__ "/api/match/getMatchs"
__Request__
```
method: GET
url: "/api/match/getMatchs"
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
    }]
}
```
## __GET__  "/api/match/getMatch/:matchId"
__Request__
```
method: GET
url: "/api/match/getMatch/:matchId"
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
## __PUT__  "/api/match/editMatch/:matchId"
__Request__
```
method: PUT
url: "/api/match/editMatch/:matchId"
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
## __DELETE__ "/api/match/deleteMatch/:matchId"
__Request__
```
method: DELETE
url: "/apu/match/deleteMatch/:matchId"
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