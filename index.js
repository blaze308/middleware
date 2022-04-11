const express = require("express");
const authRouter = require("./routes/auth.router");
const indexRouter = require("./routes/index.router");

const app = express()
app.use(express.json())

//work globally so no path
app.use((req, res, next) => {
    console.log("GLobal Middleware")
    next()
})

app.use("/", indexRouter)
app.use("/auth", authRouter )

app.listen(4000, () => {
    console.log("🚀 Server Running");
})