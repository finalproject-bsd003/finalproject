const port = process.env.PORT || 4001
const app = require("../app")

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})