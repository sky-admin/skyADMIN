/**
 * Created by skyADMIN on 16/7/15.
 */

require("http").createServer(function (req, res) {
    console.log(req);
    res.end("hello world");
}).listen(8000);

console.log("server is running on 8000");