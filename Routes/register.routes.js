
const { Router } = require("express");
const { registerContoller } = require("../Controllers/register.controller");
const RegisterRoute = Router();
RegisterRoute.post("/", registerContoller);
module.exports = {
    RegisterRoute
}
