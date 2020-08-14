var request = require('supertest');
var expect = require('chai').expect;
var app = require('../index');
var Match = require('../models/Match');
var Result = require('../models/Result');

describe("POST /api/result", () => {
    it("[Success] get a result", async () => {
        const result = await Result.create()
    })
})


// POST "/api/result"                결과 생성
// GET "/api/result/:id"             결과 읽기
// PUT "/api/result/:id"             결과 수정
// DELETE "/api/result/:id"          결과 삭제
