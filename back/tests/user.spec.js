var request = require('request');
var expect = require('chai').expect;
var app = require('설정혀~');
const User = require('../models/User');

// predefined user
describe("USER API TEST", () => {
    before("prelogin for test", async () => {
        let globalUser1 = {
            email: "globalUser1@gmail.com",
            password: "123123",
            name: "global1",
            nickname: "globalNickname1"
        };
        let globalUser2 = {
            email: "globalUser2@gmail.com",
            password: "123123",
            name: "global2",
            nickname: "globalNickname2"
        }
        let globalUser3 = {
            email: "globalUser3@gmail.com",
            password: "123123",
            name: "global3",
            nickname: "globalNickname3"
        }

        const globalUser1Created = await User.create(globalUser1);
        const globalUser2Created = await User.create(globalUser2);
        const globalUser3Created = await User.create(globalUser3);

        const globalUser1Res = await request(app)
            .post("/api/user/login")
            .send({ email: "globalUser1@gamil.com", password:"123123" })
            .expect(200);

        const globalUser2Res = await request(app)
            .post("/api/user/login")
            .send({ email: "globalUser2@gamil.com", password:"123123" })
            .expect(200);
        
        const globalUser3Res = await request(app)
            .post("/api/user/login")
            .send({ email: "globalUser3@gamil.com", password:"123123" })
            .expect(200);
        

        // Pass token to ITs
        request.globalUser1Token = globalUser1Res.body.token;
        request.globalUser2Token = globalUser2Res.body.token;
        request.globalUser3Token = globalUser3Res.body.token;

        // Pass id  to Its
        request.globalUser2_id = globalUser2Created._id; 


    });

    after("delete prelogined user", async () => {
        await User.deleteOne({ email: "globalUser1@gmail.com" });
        await User.deleteOne({ email: "test1@gmail.com" });
        await User.deleteOne({ email: "globalUser2@gmail.com"})
    });

    describe("POST /api/user/register", () => {
        let inputData = { 
            email: "test1@gmail.com", 
            password: "123123", 
            name: "testName1",
            nickname: "testNickName1",
        };

        let wrongNicknameData = {
            email: "test1@gmail.com", 
            password: "123123", 
            name: "testName2",
            nickname: "as"  // minlength: 3  
        } 

        it("[Success] register a user", async () => {       // 비밀번호 jwt 추가 !!
            const res = await request(app)
                .post("/api/user/register")
                .send(inputData);

            expect(res.status).to.be.equal(201);
            expect(res.body.data.email).to.be.equal(inputData.email);
            expect(res.body.data.name).to.be.equal(inputData.name);
            expect(res.body.data.nickname).to.be.equal(inputData.nickname);
        });

        it("[Fail] mongoose error", async () => {
            const res = await request(app)
                .post("/api/user/register")
                .send(wrongNicknameData);
            expect(res.status).to.be.equal(400);
            expect(res.body.message).to.be.equal("Invalid data inputed")
        });
    });

    describe("POST /api/user/login", () => {
        before("register a user before login test", async () => {
            let testUser = {
                email: "test1@gmail.com", 
                password: "123123", 
                name: "testName1",
                nickname: "testnickname1",
            };
        
            await User.create(testUser);
        })

        after("delete after individual test", async () => {
            await User.deleteOne({ email: "test1@gmail.com" })
        })
        
        let loginInput = {
            email:"test1@gmail.com",
            password: "123123"
        };

        let wrongPasswordInput = {
            email: "test1@gmail.com",
            password: "wrongpassword"
        };

        it("[Success] login success", async () => {
            const res = await request(app)
                .post("/api/user/login")
                .send(loginInput);
            expect(res.status).to.be.equal(200);
            expect(res.body.data).to.have.property('token');
        });

        it("[Fail] login failed", async () => {
            const res = await request(app)
                .post("/api/user/login")
                .send(wrongPasswordInput);
            expect(res.status).to.be.equal(400);
            expect(res.body.data.message).to.be.equal("Wrong password inputed")  // 
        });
    });


    describe("GET /api/user/logout", () => {
        // 로그아웃은 프론트에서 세션만 지우는 거라서 여기서 할 필요는 없을 듯.
    });

    describe("GET /api/user/getMyProfile", () => {
        it("[Success] got my profile", async () => {
            const res = await request(app)
                .get("/api/user/getMyProfile")
                .set('x-access-token', `${request.globalUser1Token}`);

            expect(res.status).to.be.equal(200);
            expect(res.body.data).to.have.property("_id");
            expect(res.body.data).to.have.property("email");
            expect(res.body.data).to.have.property("name");
            expect(res.body.data).to.have.property("nickname");
        });

        it("[Fail] Wrong token inputed", async () => {
            const res = await request(app)
                .get("/api/user/getMyProfile")
                .set('x-access-token', "WrongTokenValueInput");

            expect(res.status).to.be.equal(401);
            expect(res.body.message).to.be.equal('Not authorized')
        });
    });

    describe("GET /api/user/getUserDetail/:userId", () => {
        it("[Success] got user detail", async () => {
            const res = await request(app)
                .get(`/api/user/getUserDetail/${request.globalUser2_id}`);
                
            expect(res.status).to.be.equal(200);
            expect(res.body.data).to.have.property("email");
            expect(res.body.data).to.have.property("name");
            expect(res.body.data).to.have.property("nickname");
            expect(res.body.data).to.have.property("point");
        });

        it("[Fail] wrong userId inputed", async () => {
            const res = await request(app)
                .get(`/api/user/getUserDetail/${wrongValue}`);
            expect(res.status).to.be.equal(404);
            // expect(res.body.message).to.be.equal('Not found') // 정확한 메시지 확인 및 정의
        });
    });

    describe("PUT /api/user/editProfile/:userId", () => {
        it("[Success] edited myProfile", async () => {
            const res = await request(app)
                .put(`/api/user/editProfile/${request.globalUser2_id}`)
                .set('x-access-token', `${globalUser1Token}`)
                .send({ nickname: "changedNickname" });

            expect(res.status).to.be.equal(200);
            expect(res.body.data.nickname).to.be.equal('changedNickname');
        });

        it("[Fail] wrong token inputed", async () => {
            const res = await request(app)
                .put(`/api/user/editProfile/${request.globalUser2_id}`)
                .set('x-access-token', `${wrongToken}`)
                .send({ nickname: "changedNickname" });

            expect(res.status).to.be.equal(401);
        });
    });

    describe("GET /api/user/withdrawal", () => {
        it("[Success] withdrawaled well", async () => {
            const res = await request(app)
                .get("/api/user/withdrawal")
                .set('x-access-token', `${globalUser3Token}`)
        });
    })
})