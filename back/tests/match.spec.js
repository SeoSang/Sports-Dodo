var request = require('supertest');
var expect = require('chai').expect;
var app = require('../index');
var User = require('../models/User');
var Match = require('../models/Match');

// get Token
describe("login for tests", () => {
    before("Login and get token, infos for individual tests", async () => {
        // await Match.deleteMany({});
        // await User.deleteMany({});

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
        

        // Pass "token" to ITs
        request.globalUser1Token = globalUser1Res.body.token;
        request.globalUser2Token = globalUser2Res.body.token;
        request.globalUser3Token = globalUser3Res.body.token;

        // Pass "_id" to Its
        request.globalUser1_id = globalUser1Created._id;
        request.globalUser2_id = globalUser2Created._id;
        request.globalUser3_id = globalUser3Created._id; 
    });

    before("Test Matchs for individual tests", async () => {
        let testMatch1 = {
            homeTeam: "LA",
            awayTeam: "Sanantonio",
            startTime: "12:00"
        }

        let testMatch2 = {
            homeTeam: "Clipers",
            awayTeam: "Sanantonio",
            startTime: "14:00"
        }

        let testMatch1Created = await Match.create(testMatch1);
        let testMatch2Created = await Match.create(testMatch2);

        request.testMatch1_id = testMatch1Created._id;
        request.testMatch2_id = testMatch2Created._id;
    });

    
    after("delete prelogined user", async () => {
        // await User.deleteMany({});
        // await Match.deleteMany({});
    });


    describe("POST /api/match/", async () => {
        let newMatchInput = {
            homeTeam: "LA",
            awayTeam: "Dallas",
            startTime: "12:00" // 타입 정해지면 바꾸셔요.
        }

        let noAwayTeamMatchInput = { // awayTeam 없는 데이터.
            homeTeam: "LA",
            startTime: "14:00" // 타입 정해지면 바꾸셔요.
        } 

        it("[Success] make new match", async () => {
            const res = await request(app)
                .post("/api/match")
                .send(newMatchInput);
            
            expect(res.status).to.be.equal(201);
            expect(res.body.data.homeTeam).to.be.equal("LA");
            expect(res.body.data.awayTeam).to.be.equal("Dallas");
            expect(res.body.data.startTime).to.be.equal("12:00");
            expect(res.body.data.result).to.be.equal(undefined);
        });

        it("[Fail] wrong data inputed", async () => {
            const res = await request(app)
                .post("/api/match")
                .send(noAwayTeamMatchInput);

            expect(res.status).to.be.equal(400);
            expect(res.body.error).to.be.equal("Invalid data inputed")
        });
    })


    // querys 추가 요망 !
    describe("GET /api/match", () => {  // 추후 params 추가합니다~
        it("[Success] get matches well", async () => {
            const res = await request(app)
                .get("/api/match")
            
            expect(res.status).to.be.equal(200);
            // expect(res.body.data.length).to.be.equal("limit 정한 수");
            // ! important !
            // query 에 따라 expect 설정하는게 달라진다. 
        });
    })     
//
// 여기부터 새 api명들로 작성했씀.
    describe("GET /api/match/:id", () => {
        it("[Success] got a match with this match._id", async () => {
            const res = await request(app)
                .get(`/api/match/${request.testMatch1_id}`);
            expect(res.status).to.be.equal(200);
            expect(res.body.data.homeTeam).to.be.equal("LA");
            expect(res.body.data.awayTeam).to.be.equal("Sanantonio");
        });

        it("[Fail] No match data with this parameter", async () => {
            const res = await request(app)
                .get('/api/match/wrongMatch_id');
            expect(res.status).to.be.equal(404);
            expect(res.body.error).to.be.equal(`Resource not found`)
        })
    })     

    describe("PUT /api/match/:id", () => {
        it("[Success] editted match detail", async () => {
            const res = await request(app)
                .put(`/api/match/${request.testMatch1_id}`)
                .send({ awayTeam: "Lakers" });
            expect(res.status).to.be.equal(200);
            expect(res.body.data.awayTeam).to.be.equal("Lakers");
        });

        it("[Fail] wrong parameter id", async () => {
            const res = await request(app)
                .put(`/api/match/wrongMatch_id`)
                .send({ awayTeam: "Lakers" });
            expect(res.status).to.be.equal(404);
            expect(res.body.error).to.be.equal(`Resource not found`)
        });


    })
    
    describe("DELETE /api/match/:id", () => {
        it("[Success] deleted a match well", async () => {
            const res = await request(app)
                .delete(`/api/match/${request.testMatch2_id}`)
            expect(res.status).to.be.equal(200);
        });

        it("[Fail] Wrong parameter inputed", async () => {
            const res = await request(app)
                .delete(`/api/match/wrongMatch_id`)
            expect(res.status).to.be.equal(404);
            expect(res.body.error).to.be.equal('Resource not found');
        });
    })     
})