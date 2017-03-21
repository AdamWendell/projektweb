var express = require('express')  
var path = require('path')
var compression = require('compression')
var app = express()
app.use(compression())
app.use(express.static(__dirname + '/../frontend/dist'));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../frontend/dist/index.html'))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
