const welcome = (req, res) => {
    res.send("Welcome")
}
const greet = (req, res) => {
    res.send("Greetings")
}

const protected = (req, res) => {
    res.send("You can see this because you're authorised")
}

module.exports = {
    welcome,
    greet,
    protected
}