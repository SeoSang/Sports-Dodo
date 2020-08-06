# APIs
```
POST "/api/result/createResult"         결과 생성
GET "/api/result/getResult"             결과 읽기
PUT "/api/result/editResult"            결과 수정
DELETE "/api/result/deleteResult"       결과 삭제
```
<br>

# Result Model Schema
```js
var ResultSchema = mongoose.Schema({
    match: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    homeAwayDraw: {
        type: String,
        enum: [Home, Away, Draw],
        required :true,
    },              
    homeScore: {
        type: Number,
        required: true
    },
    awayScore: {
        type: Number,
        required: true
    }
});
```
<br>


# API spec

## __결과 생성__ POST "/api/result/createResult"
- Only adminstrator can do

__Request__
```
method: POST
url: "/api/result/createResult"
header: { 
    "Content-type": "application/json",
    "x-access-token": "token value"
}
body: {
    "match": match._id    // inputed automatically
    "homeAwayDraw": "Home",
    "homeScore": "2",
    "awayScore": "1"
}
```

__Response__
```
{
    "success": true,
    "data": {
        "_id": "sdfhkl2hsdlkkl352sdjkfhlksd",
        "match": match._id    // inputed automatically
        "homeAwayDraw": "Home",
        "homeScore": "2",
        "awayScore": "1"
    }
}
```
<br>

## __결과 읽기__ GET "/api/result/getResult"    // maybe we will request "GET" with "match_id"
__Request__
```
method: GET
url: "/api/result/getResult/"
header: { 
    "Content-type": "application/json",
    "x-access-token": "token value"
}
```

__Response__
```
{
    "success": true,
    "data": {
        "_id": "sdfhkl2hsdlkkl352sdjkfhlksd",
        "match": match._id    // inputed automatically
        "homeAwayDraw": "Home",
        "homeScore": "2",
        "awayScore": "1"
    }    
}
```
<br>

## __결과 수정__ PUT "/api/result/editResult"  // do we need this PUT api? Do this later
__Request__
```
method: PUT
url: "/api/result/editResult/:resultId"
header: { 
    "Content-type": "application/json",
    "x-access-token": "token value"
}
body: {
}
```

__Response__
```
{
    "success": true,
    
}
```
<br>

## __결과 삭제__ DELETE "/api/result/deleteResult"
__Request__
```
method: DELETE
url: "/api/result/deleteResult/:resultId"
header: { 
    "Content-type": "application/json",
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