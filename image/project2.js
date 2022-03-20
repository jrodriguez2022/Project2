const http = require("http");

const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {

res.setHeader("Content-Type", "text/html");
res.writeHead(200);
res.write('<html><body>');
res.write('<h1>This is Project2</h1><br/><br/>/Hello = Greatings <br/>');
switch (req.url) {
	case "/hello":
	   url=req.url;
	   res.write("The URL you used was: "+url+"<br/><br/><br/> <h1>HELLO!!</h1>");
	   break;
}

res.end('</body></html>');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://'+host+':'+port);
});
