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
const { CreateFavorite } = require('../lib/createFavorite')
const DeleteFavorite = require('../lib/deleteFavorite')

beforeAll(async () => {
    await Promise.allSettled(
        [
            CreateUser(),
            CreateCategory(),
            CreateStore(),
            CreateDress(),
            CreateFavorite()
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
            DeleteFavorite(),
            DeleteDress(),
            DeleteCategory(),
            DeleteStore(),
            DeleteUser()
        ]
    )
});

describe("testFavorite", () => {
    // Ini masih admin yang list favorite
    it("list favorite", async () => {
        const response = await request(app)
            .get('/favorite')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
        expect(response.status).toBe(200);
    })

    it("list favorite invalid access token", async () => {
        const response = await request(app)
            .get('/favorite')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBm")
        expect(response.status).toBe(401);
    })

    it("add favorite", async () => {
        const id = 3
        const response = await request(app)
            .post(`/favorite/${id}`)
            .send({
                DressId: id
            })
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
        expect(response.status).toBe(200);
    })

    // it("add favorite", async () => {
    //     const id = 999
    //     const response = await request(app)
    //         .post(`/favorite/${id}`)
    //         .send({
    //             DressId: id
    //         })
    //         .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBm")
    //     expect(response.status).toBe(401);
    // })




    // it("delete favorite by id", async () => {
    //     const id = 1
    //     const response = await request(app)
    //         .delete(`/favorite/${id}`)
    //         .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MDcyNjEwOH0.ehQlp3TM5zJRokeHaW2VNREkznT989cjhUPCfY3LBmc")
    //         .expect(200)
    //     expect(response.body.msg).toBe(`Success to delete`)
    // })

})