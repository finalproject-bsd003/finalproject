const app = require("../app")
const request = require('supertest')
const { CreateCategory } = require('../lib/createCategory')
const DeleteUser = require('../lib/deleteUser')
const { CreateUser } = require('../lib/createUser')
const DeleteCategory = require('../lib/deleteCategory')
const { CreateStore } = require('../lib/createStore')
const DeleteStore = require('../lib/deleteStore')
const { CreateDress } = require('../lib/createDress')
const DeleteDress = require('../lib/deleteDress')

beforeAll(async () => {

    // await CreateUser()
    // await CreateCategory()
    // await CreateStore()
    // await CreateDress()
    await Promise.all(
        [
            CreateUser(),
            CreateCategory(),
            CreateStore(),
            CreateDress()
        ]
    )
    // CreateUser();
    // CreateCategory();
    // CreateStore();
    // CreateDress();
})

afterAll(async () => {
    await Promise.allSettled(
        [
            DeleteDress(),
            DeleteCategory(),
            DeleteStore(),
            DeleteUser()
        ]
    )
});

describe("testDress", () => {

    it("list dress", async () => {
        const response = await request(app)
            .get('/dress')

        expect(response.status).toBe(200);
    })
    it("list dress query name", async () => {
        const response = await request(app)
            .get("/dress?name=a")
            .expect(200)
        expect(response.body.data[0]).toHaveProperty(`name`, expect.any(String))
    })
    it("list dress query category id", async () => {
        const response = await request(app)
            .get("/dress?CategoryId=1")
            .expect(200)
    })
    it("list dress detail", async () => {
        const id = 1
        const response = await request(app)
            .get(`/dress/${id}`)

        expect(response.status).toBe(200);
    })
    it("delete dress by id", async () => {
        const id = 2
        const response = await request(app)
            .delete(`/dress/${id}`)
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
            .expect(200)
        expect(response.body.message).toBe(`Data with id ${id} has been successfully deleted`)
    })

    it("delete dress by id not found", async () => {
        const id = 999
        const response = await request(app)
            .delete(`/dress/${id}`)
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
            .expect(404)
        expect(response.body.message).toBe(`Error not found`)
    })

    // it("delete category not found", async () => {
    //     const id = 10
    //     const response = await request(app)
    //         .delete(`/categories/${id}`)
    //         .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
    //     expect(response.status).toBe(404)
    // })

    // it("add category", async () => {
    //     const response = await request(app)
    //         .post(`/categories`)
    //         .send({
    //             name: "Cat 6"
    //         })
    //         .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
    //     expect(response.status).toBe(201)
    //     expect(response.body).toHaveProperty('name', expect.any(String))
    // })
    // it("add failed category", async () => {
    //     const response = await request(app)
    //         .post(`/categories`)
    //         .send({
    //             name: ""
    //         })
    //         .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
    //     expect(response.status).toBe(400)
    //     expect(response.body.message).toBe('All input column is required')
    // })
})