const login = (req, res) => {
    res.send("login successful")
}

const register = (req, res) => {
    res.send("registration successful")
}

module.exports = {
    register,
    login
}