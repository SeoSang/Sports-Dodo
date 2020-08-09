var request = require('supertest');
var expect = require('chai').expect;
var app = require('../index');
const User = require('../models/User');

// predefined user
describe("USER API TEST", () => {
    before("prelogin for test", async () => {
        await User.deleteMany({});

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
            .send({ email: "globalUser1@gmail.com", password:"123123" })
            .expect(200);

        const globalUser2Res = await request(app)
            .post("/api/user/login")
            .send({ email: "globalUser2@gmail.com", password:"123123" })
            .expect(200);
        
        const globalUser3Res = await request(app)
            .post("/api/user/login")
            .send({ email: "globalUser3@gmail.com", password:"123123" })
            .expect(200);
        

        // Pass token to ITs
        request.globalUser1Token = globalUser1Res.body.token;
        request.globalUser2Token = globalUser2Res.body.token;
        request.globalUser3Token = globalUser3Res.body.token;

        // Pass id  to Its
        request.globalUser2_id = globalUser2Created._id; 

    });

    after("delete test users", async () => {
        await User.deleteMany({ });
    });

    describe("POST /api/user/register", () => {
        let inputData = { 
            email: "test1@gmail.com", 
            password: "123123", 
            name: "testName1",
            nickname: "testNickName1",
        };

        let wrongNicknameData = {
            email: "test3@gmail.com", 
            password: "123123", 
            name: "testName2",
            nickname: 's'
        } 

        it("[Success] register a user", async () => {       // 비밀번호 jwt 추가 !!
            const res = await request(app)
                .post("/api/user")
                .send(inputData);

            expect(res.status).to.be.equal(201);
            expect(res.body).to.have.property("token")
        });

        it("[Fail] mongoose error", async () => {
            const res = await request(app)
                .post("/api/user")
                .send(wrongNicknameData);
            expect(res.status).to.be.equal(400);
            expect(res.body.error).to.be.equal("Invalid data inputed")
        });
    });

    describe("POST /api/user/login", () => {
        before("register a user before login test", async () => {
            let testUser = {
                email: "test5@gmail.com", 
                password: "123123", 
                name: "testName1",
                nickname: "testnickname1",
            };
        
            await User.create(testUser);
        })
        
        let loginInput = {
            email:"test5@gmail.com",
            password: "123123"
        };

        let wrongPasswordInput = {
            email: "test5@gmail.com",
            password: "wrongpassword"
        };

        it("[Success] login success", async () => {
            const res = await request(app)
                .post("/api/user/login")
                .send(loginInput);
            expect(res.status).to.be.equal(200);
            expect(res.body).to.have.property('token');
        });

        it("[Fail] login failed", async () => {
            const res = await request(app)
                .post("/api/user/login")
                .send(wrongPasswordInput);
            expect(res.status).to.be.equal(401);
            expect(res.body.error).to.be.equal("Invalid credentials")
        });
    });


    // describe("GET /api/user/logout", () => {
    //     // 로그아웃은 프론트에서 세션만 지우는 거라서 여기서 할 필요는 없을 듯.
    // });

    describe("GET /api/user/profile", () => {
        it("[Success] got my profile", async () => {
            const res = await request(app)
                .get("/api/user/profile")
                .set('x-access-token', `${request.globalUser1Token}`);

            expect(res.status).to.be.equal(200);
            expect(res.body.data).to.have.property("_id");
            expect(res.body.data).to.have.property("email");
            expect(res.body.data).to.have.property("name");
            expect(res.body.data).to.have.property("nickname");
        });

        it("[Fail] Wrong token inputed", async () => {
            const res = await request(app)
                .get("/api/user/profile")
                .set('x-access-token', "WrongTokenValueInput");
            
            expect(res.status).to.be.equal(401);
            expect(res.body.error).to.be.equal('Not authorized to access this route')
        });
    });

    //
    // query 추가하기 !!
    describe("GET /api/users", () => {
        // it("[Success] got users", async () => {
            // const res = await request(app)
            //     .get("/api/users")

            // expect(res.status).to.be.equal(200);
            //expect querys 추가.

        // })
    })

    describe("GET /api/user/:id", () => {
        it("[Success] got user detail", async () => {
            const res = await request(app)
                .get(`/api/user/${request.globalUser2_id}`);
            
            expect(res.status).to.be.equal(200);
            expect(res.body.data).to.have.property("email");
            expect(res.body.data).to.have.property("name");
            expect(res.body.data).to.have.property("nickname");
            expect(res.body.data).to.have.property("point");
        });

        it("[Fail] wrong userId inputed", async () => {
            const res = await request(app)
                .get("/api/user/wrongValue");
            expect(res.status).to.be.equal(404);
            expect(res.body.error).to.be.equal('Resource not found')
        });
    });

    describe("PUT /api/user/:id", () => {
        it("[Success] edited user detail", async () => {
            const res = await request(app)
                .put(`/api/user/${request.globalUser2_id}`)
                .set('x-access-token', `${request.globalUser1Token}`)
                .send({ nickname: "changedNickname" });

            expect(res.status).to.be.equal(200);
            expect(res.body.data.nickname).to.be.equal('changedNickname');
        });

        it("[Fail] wrong token inputed", async () => {
            const res = await request(app)
                .put(`/api/user/${request.globalUser2_id}`)
                .set('x-access-token', 'wrongToken')
                .send({ nickname: "changedNickname" });

            expect(res.status).to.be.equal(401);
        });
    });

    describe("PUT /api/user/profile/", () => {
        it("[Success] edited myProfile", async () => {
            const res = await request(app)
                .put('/api/user/profile')
                .set('x-access-token', `${request.globalUser1Token}`)
                .send({ nickname: "changed" });

            expect(res.status).to.be.equal(200);
            expect(res.body.data.nickname).to.be.equal('changed');
        });

        it("[Fail] wrong token inputed", async () => {
            const res = await request(app)
                .put(`/api/user/profile`)
                .set('x-access-token', `${request.wrongToken}`)
                .send({ nickname: "changedNickname" });

            expect(res.status).to.be.equal(401);
        });
    });

    describe("GET /api/user/withdrawal", () => {
        it("[Success] withdrawaled well", async () => {
            const res = await request(app)
                .delete("/api/user/")
                .set('x-access-token', `${request.globalUser2Token}`)
            expect(res.status).to.be.equal(200);
        });
    })
})