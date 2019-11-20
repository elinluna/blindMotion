const SerialPort = require('serialport');
const port = new SerialPort('/dev/tty.usbmodem1414301', {baudRate: 115200});

const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());

port.on('open', onOpenPort);
function onOpenPort() {
    console.log("onOpenPort");
    
    console.log("start listening 5000");
    app.listen(5000);
}

// http://localhost:5000/run-motor?1=1
// &angry=0.046190045773983
// &disgusted=0.000019048307876801118
// &fearful=0.0005608836654573679
// &happy=0.00003795813609031029
// &neutral=0.9131286144256592
// &sad=0.03994185850024223
// &surprised=0.00012164168583694845

app.get('/run-motor', function (req, res) {
    
    const angry = req.query.angry;
    const disgusted = req.query.disgusted;
    const fearful = req.query.fearful;
    const happy = req.query.happy;
    const neutral = req.query.neutral;
    const sad = req.query.sad;
    const surprised = req.query.surprised;

    console.log(req.query);

    let rotation = angry * 100;
    
    runMotor(rotation);
    res.send('Hello World');
});

function runMotor(rotation) {
    const cmd = `G1 X${rotation} Y${rotation} Z${rotation} F40000\n`;
    port.write(cmd.toString());
    console.log('Sending ' + cmd + 'out the serial port');
}