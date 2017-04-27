import * as http from 'http';
//let http = require("http");

function process_request(req: http.ServerRequest, res: http.ServerResponse){
    let body = 'Thanks for calling!¥n';
    let content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
let s = http.createServer(process_request);
s.listen(8080);