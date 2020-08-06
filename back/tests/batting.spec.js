var request = require('request');
var expect = require('chai').expect;
var app = require('설정혀~');
var User = require('../models/User');
var Match = require('../models/Match');
var Batting = require('../models/Batting');

describe("Batting Test Codes", () => {
    before("Make Test Users", async () => {
        let testUser1Data = {
            email: "testUser1@gmail.com",
            password: "123123",
            name: "testUser1",
            nickname: "testNickname1"
        };
        let testUser2Data = {
            email: "testUser2@gmail.com",
            password: "123123",
            name: "testUser2",
            nickname: "testNickname2"
        }
        let testUser3Data = {
            email: "testUser3@gmail.com",
            password: "123123",
            name: "testUser3",
            nickname: "testNickname3"
        }

        const testUser1 = await User.create(testUser1Data);
        const testUser2 = await User.create(testUser2Data);
        const testUser3 = await User.create(testUser3Data);

        const testUser1Res = await request(app)
            .post("/api/user/login")
            .send({ email: "testUser1@gamil.com", password:"123123" })
            .expect(200);

        const testUser2Res = await request(app)
            .post("/api/user/login")
            .send({ email: "testUser2@gamil.com", password:"123123" })
            .expect(200);
        
        const testUser3Res = await request(app)
            .post("/api/user/login")
            .send({ email: "testUser3@gamil.com", password:"123123" })
            .expect(200);
        

        // Pass "token" to ITs
        request.testUser1Token = testUser1Res.body.token;
        request.testUser2Token = testUser2Res.body.token;
        request.testUser3Token = testUser3Res.body.token;

        // Pass "_id" to Its
        request.testUser1_id = testUser1._id; 
        request.testUser2_id = testUser2._id; 
        request.testUser3_id = testUser3._id; 
    });

    before("Make Test Matchs", async () => {
        let testMatch1Data = {
            homeTeam: "LA",
            awayTeam: "Dallas",
            startTime: "02:02:02/01/01/20"
        };

        let testMatch2Data = {
            homeTeam: "Lakers",
            awayTeam: "Memphis",
            startTime: "02:02:02/01/01/20"
        };

        let testMatch3Data = {
            homeTeam: "Boston",
            awayTeam: "Dallas",
            startTime: "02:02:02/01/01/20"
        };

        let testMatch1 = await Match.create(testMatch1Data);
        let testMatch2 = await Match.create(testMatch2Data);
        let testMatch3 = await Match.create(testMatch3Data);

        request.testMatch1_id = testMatch1._id;
        request.testMatch2_id = testMatch2._id;
        request.testMatch3_id = testMatch3._id;
    });

    before("Make test Batting data for test", async () => {
        let testBatting2Data = {
            user: `${request.testUser2_id}`,
            match: `${request.testMatch2_id}`,
            chooseHomeAwayDraw: "Home",
            battingPoint: 10,
            description: "today is mine"
        }

        const testBatting2 = await Batting.create(testBatting2Data);

        request.testBatting2_id = testBatting2._id;
    })

    after("Delete test datas", async () => {
        await User.deleteMany({});
        await Match.deleteMany({});
        await Batting.deleteMany({});
    });

    describe("POST /api/batting", () => {
        let testBatting1Data = {
            user: `${request.testUser1_id}`,
            match: `${request.testMatch1_id}`,
            chooseHomeAwayDraw: "Home",
            battingPoint: 10,
            description: "today is mine"
        }

        let testWrongBattingData = {
            user: `${request.testUser1_id}`,
            match: `${request.testMatch1_id}`,
            chooseHomeAwayDraw: "Home",
            description: "today is mine"
        }

        it("[Success] created batting well", async () => {
            const res = await request(app)
                .post("/api/batting")
                .set('x-access-token', `${request.testUser1Token}`)
                .send(testBatting1Data);
            expect(res.status).to.be.equal(200);
            expect(res.body.data.match).to.be.equal(`${request.testMatch1_id}`);
            expect(res.body.data.chooseHomeAwayDraw).to.be.equal("Home");
            expect(res.body.data.battingPoint).to.be.equal(10);
        });

        it("[Fail] Invalid Token passed", async () => {
            const res = await request(app)
                .post("/api/batting")
                .set('x-access-token', `wrong token value`)
                .send(testBatting1Data); 
            expect(res.status).to.be.equal(401);
            expect(res.body.message).to.be.equal("추후에 설정");
        });

        it("[Fail] Invalid Token passed", async () => {
            const res = await request(app)
                .post("/api/batting")
                .set('x-access-token', `${request.testUser1Token}`)
                .send(testWrongBattingData); 
            expect(res.status).to.be.equal(400);
            expect(res.body.message).to.be.equal("mongoose type error");
        });
    })

    describe("GET /api/battings", () => {
        it("[Success] got battings well", async () => {
            const res = await request(app)
                .get("/api/batting");
                //.query()   컨트롤러 만들면 추가.
            expect(res.status).to.be.equal(200);
            // params 에 따라 expect문 추가.
        });
    })         

    describe("GET /api/batting/:id", () => {
        it("[Success] got a batting", async () => {
            const res = await request(app)
                .get(`/api/batting/${request.testBatting2_id}`)
        })
    })

    describe("PUT /api/batting/:id", () => {
        let changingData = {
            chooseHomeAwayDraw: "Draw"
        }

        it("[Success] edit a batiing detail", async () => {
            const res = await request(app)
                .put(`/api/batting/${request.testBatting2_id}`)
                .set('x-access-token', `${request.testUser2Token}`)
                .send(changingData);
            expect(res.status).to.be.equal(200);
            expect(res.body.data.chooseHomeAwayDraw).to.be.equal(changingData.chooseHomeAwayDraw);
        })

        it("[Fail] Only onwer of this batting can remove", async () => {
            const res = await request(app)
                .put(`/api/batting/${request.testBatting2_id}`)
                .set('x-access-token', `${request.testUser1Token}`)  // 타인의 토큰
                .send(chaningData);

            expect(res.status).to.be.equal(401);
            expect(res.data.message).to.be.equal("Only onwer of this batting can edit")
        });

        it("[Fail] Invalid token passed", async () => {
            const res = await request(app)
                .put(`/api/batting/${request.testBatting2_id}`)
                .set('x-access-token', 'wrong token value')
                .send(chaningData);

            expect(res.status).to.be.equal(401);
            expect(res.data.message).to.be.equal("메시지 입력 !!")
        });
    });
  
    describe("DELETE /api/batting/:id", () => {
        it("[Success] Deleted a batting", async () => {
            const res = await request(app)
                .delete(`/api/batting/${request.testBatting2_id}`)
                .set('x-access-token', `${request.testUser2Token}`);
            expect(res.status).to.be.equal(200);
            expect(res.body.message).to.be.equal("deleted well");
        });

        it("[Fail] Only onwer of this batting can delete", async () => {
            const res = await request(app)
                .delete(`/api/batting/${request.testBatting2_id}`)
                .set('x-access-token', `${request.testUser1Token}`);
            expect(res.status).to.be.equal(401);
            expect(res.body.message).to.be.equal("Only onwer of thie batting can delete");
        });
    })
})