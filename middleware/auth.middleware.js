const authRequire = (req, res, next) => {
    const body = req.body

    if (body.username !=="jay" || body.password !== "secret"){
        res.send("invalid credential")
    }

    next()
}

module.exports = {
    authRequire
}