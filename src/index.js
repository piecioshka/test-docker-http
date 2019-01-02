const http = require("http");
const connect = require("connect");
const morgan = require("morgan");

const app = connect();
app.use(morgan("dev"));
app.use(function clientHandler(req, res) {
    res.end(
        JSON.stringify({
            version: process.version
        })
    );
});

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server was started at http://localhost:${process.env.PORT}`);
});
