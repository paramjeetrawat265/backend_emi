const { Router } = require("express");
const { LoginController } = require("../Controllers/login.controller");
const LoginRoute = Router();
LoginRoute.post("/", LoginController);
module.exports = {
    LoginRoute
}