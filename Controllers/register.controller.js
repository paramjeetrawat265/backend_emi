const { UserModel } = require("../Models/users.models");

const registerContoller = async (req, res) => {
    const { name, email, password } = req.body;
    const isUser = await UserModel.findOne({ email: email });
    if (isUser) {
        res.send({ "msg": "User Already Exists" });
    }
    else {
        const newUser = new UserModel({
            name,
            email,
            password
        })
        try {
            newUser.save();
            res.send({ "msg": "User Registered" })
        }
        catch (err) {
            res.send({ "msg": "err" })
        }
    }
}
module.exports = {
    registerContoller
}