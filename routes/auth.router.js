const { Router } = require("express")
const { login, register} = require("../controllers/auth.controller")

const authRouter = Router()

authRouter.use("/auth", (req, res, next) => {
    console.log("Auth Route")
    next()
})

authRouter.get("/login", login)
authRouter.get("/register", register)

module.exports = authRouter