const app = require("../app")
const request = require('supertest')
const { CreateCategory } = require('../lib/createCategory')
const DeleteUser = require('../lib/deleteUser')
const { CreateUser } = require('../lib/createUser')

beforeAll(() => {
    CreateUser()
    CreateCategory()
})

afterAll(() => {
    DeleteUser()
});

describe("testRegisterLogin", () => {
    it("list category", async () => {
        const response = await request(app)
            .get("/categories")
            .expect(200)
    })
    it("delete category", async () => {
        const id = 4
        const response = await request(app)
            .delete(`/categories/${id}`)
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJkIiwiZW1haWwiOiJkQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDU0MDk4MH0.xu--XBLdsyFH9rKQ49XMNJdur3WYflNfLgEW0LgXDYY")
            .expect(200)
        expect(response.body.msg).toBe(`Category with id ${id} is successfully deleted`)
    })
    // Add category masih belum berhasil untuk di test

    it("add category", async () => {
        const response = await request(app)
            .post(`/categories`)
            .send({
                name: "Cat 6"
            })
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJkIiwiZW1haWwiOiJkQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDU0MDk4MH0.xu--XBLdsyFH9rKQ49XMNJdur3WYflNfLgEW0LgXDYY")
            .expect(200)
        // expect(response.body).toBe(response)
    })
})