const express = require("express");
const app = express();

const { connection } = require("./Config/db");
const { RegisterRoute } = require("./Routes/register.routes");

var cors = require('cors');
const { LoginRoute } = require("./Routes/login.routes");

require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Homepage")
});

app.use("/register", RegisterRoute)

app.use("/login", LoginRoute)


app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connection is established");
    }
    catch (err) {
        console.log("Connection is not established");
        console.log(err)
    }
    console.log(`port is listening on ${PORT}`);
})