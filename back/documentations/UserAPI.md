# APIs
```
POST    "/api/user"                            회원 등록
DELETE  "/api/user"                            회원 탈퇴
GET     "/api/user"                            유저 읽기 (복수) // docu 작성하슈
GET     "/api/user/:id"                        유저 디테일
PUT     "/api/user/:id"                        유저 디테일 변경
GET     "/api/user/profile"                    내 정보
PUT     "/api/user/profile"                    내 정보 변경
POST    "/api/user/login"                      로그인
GET     "/api/user/logout"                     로그아웃
```
<br>

# User Model Schema
```js
var UserSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true,
        maxlength: 50
    },
    nickName: {
        type: String,
        maxlength:50,
        default:this.name,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        default: 100 //
    },
    battings: { // populate 로 바꿔야할 듯하다.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batting'
    }
});
```
<br>

# API Spec

## __회원 등록__ POST "/api/user"
__Request__
```
method: POST
url: "api/user"
header: { 
    "Content-Type": "application/json" 
}
body: {
    "email": "jordan@gamil.com",
    "password": "123123",
    "name": "michel jordan",
    "nickname": "basketballgot"
}
```
__Response__
```
{
    "success": true,
    "token: "token value"
}
```
<br>

## __회원 탈퇴__ DELETE  "/api/user/"
__Request__
```
method: DELETE
url: "api/user/withdrawal"
header: { 
    "Content-Type": "application/json" 
}
```
__Response__
```
{
    "success": true,
    "data": []
    
}
```
<br>

## __유저 읽기 (복수)__ 

<br>

## __유저 디테일__ GET  "/api/user/:id"
__Request__
```
method: GET
url: "api/user/detail/:id"
header: { 
    "Content-Type": "application/json" 
}
```
__Response__
```
{
    "success": true,
    "data": {
        "_id": "asdfhlk68242jklshdklfdsfrehwe",
        "email": "jordan@gamil.com",
        "password": "123123",
        "name": "michel jordan",
        "nickname": "basketballgot"
    }    
}
```
<br>


## __유저 디테일 변경__ PUT  "/api/user/:id"
__Request__
```
method: PUT
url: "api/user/detail/:id"
header: { 
    "Content-type": "application/json", 
    "x-access-token": "token Value"}
body: { "nickname": "jason" }
```
__Response__
```
{
    "success": true,
    "data": {
        "_id": "asdfhlk68242jklshdklfdsfrehwe",
        "email": "jordan@gamil.com",
        "password": "123123",
        "name": "michel jordan",
        "nickname": "jason"    // changed from "basketballgot" to "jason"
    }    
}
```
<br>

## __내 정보__ GET  "/api/user/profile"
__Request__
```
method: GET
url: "api/user/profile/"
header: { 
    "Content-Type": "application/json", 
    "x-access-token": "token Value" 
}

```
__Response__
```
{
    "success": true,
    "data": {
        "_id": "asdfhlk68242jklshdklfdsfrehwe",
        "email": "jordan@gamil.com",
        "password": "123123",
        "name": "michel jordan",
        "nickname": "basketballgot"
    }
    
}
```
<br>

## __내 정보 변경__ PUT  "/api/user/profile/"
__Request__
```
method: PUT
url: "api/user/profile/"
header: { 
    "Content-type": "application/json", 
    "x-access-token": "token Value"}
body: { "nickname": "jason" }
```
__Response__
```
{
    "success": true,
    "data": {
        "_id": "asdfhlk68242jklshdklfdsfrehwe",
        "email": "jordan@gamil.com",
        "password": "123123",
        "name": "michel jordan",
        "nickname": "jason"    // changed from "basketballgot" to "jason"
    }    
}
```

<br>

## __로그인__ POST "/api/user/login"
__Request__
```
method: POST
url: "api/user/
header: {
    "Content-Type": "application/json" 
}
body: {
    "email": "jordan@gamil.com",
    "password": "123123"
}
```
__Response__
```
{
    "success": true,
    "token": "sdghkle62fdhl2229fkfsdl232112hj4jkljklfsdjfdsfdslasd"
}
```
<br>

## __로그아웃__ GET  "/api/user/logout"
__Request__
```
method: GET
url: "api/user/logout"
header: { 
    "Content-Type": "application/json"
}
```
__Response__
```
{
    "success": true,
    "data": []
}
```