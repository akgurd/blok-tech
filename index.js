const http = require('http')

http.createServer(onrequest).listen(8000)

function onrequest(req, res){
    res.statusCode = 200
    res.setHeader ('Content-type', 'text/html')
    res.send ('Hello World!\n')
}