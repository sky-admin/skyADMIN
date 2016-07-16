/**
 * Created by skyADMIN on 16/7/15.
 */

require("http").createServer(function (req, res) {
    console.log(req.url);
    res.end("hello world");
}).listen(8000);
