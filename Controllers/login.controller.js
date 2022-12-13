const { UserModel } = require("../Models/users.models");

const LoginController = async (req, res) => {
    const { email, password } = req.body;
    let isUser = await UserModel.findOne({ email: email, password: password });

    if (isUser) {
        res.send({ "msg": "Login Successfull", "user": isUser })
    }
    else {
        res.send({ "msg": "Login failed" })
    }
}
module.exports = {
    LoginController
}