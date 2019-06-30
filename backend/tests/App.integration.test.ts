import app from "../src/App";
import * as request from "supertest";

describe("GET /", () => {
  it("returns OK API response", async () => {
    const result = await request(app).get("/")

    expect(result.text).toEqual('{"message":"OK!"}')
    expect(result.statusCode).toEqual(200)
  })
})

describe("GET /withdraw", () => {
  it("it returns withdraw", async () => {
    const result = await request(app).get("/withdraw?entry=80.00")
    
    expect(result.text).toEqual('{"result":[50,20,10]}')
    expect(result.statusCode).toEqual(200)
  })
})
