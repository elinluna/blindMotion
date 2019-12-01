const SerialPort = require('serialport');
const port1 = new SerialPort('/dev/tty.usbmodem1414401', { baudRate: 115200 });
const port2 = new SerialPort('/dev/tty.usbmodem1414301', { baudRate: 115200 });
const port3 = new SerialPort('/dev/tty.usbmodem1414201', { baudRate: 115200 });
const port4 = new SerialPort('/dev/tty.usbmodem1414101', { baudRate: 115200 });
const port5 = new SerialPort('/dev/tty.usbmodem141301', { baudRate: 115200 });
const port6 = new SerialPort('/dev/tty.usbmodem141201', { baudRate: 115200 });




const express = require('express')
const cors = require('cors');
const app = express()


app.use(cors());



// port1.on('open', onOpenPort);

// function onOpenPort() {
//     console.log("onOpenPort");

//     console.log("start listening 5000");
//     app.listen(5000);
// }

app.listen(5000);

let output
let mostExpression
let out = [200, 10, 10, 10, 10 ,10 ,10 ,10 ,10 ,10, 10 ,10, 10, 10, 10, 10, 10 ]
let i = 10

// http://localhost:5000/run-motor?1=1
// &angry=0.046190045773983
// &disgusted=0.000019048307876801118
// &fearful=0.0005608836654573679
// &happy=0.00003795813609031029
// &neutral=0.9131286144256592
// &sad=0.03994185850024223
// &surprised=0.00012164168583694845

const getQuery = app.get('/run-motor', function (req, res) {
    const angry = req.query.angry;
    const disgusted = req.query.disgusted;
    const fearful = req.query.fearful;
    const happy = req.query.happy;
    const neutral = req.query.neutral;
    const sad = req.query.sad;
    const surprised = req.query.surprised;

//  배열 index 0번 = 피드레이트, index 1번부터 17번까지 각도 매핑
    

    // const motortRotation = [angryRotaion, disgustedRotaion, fearfulRotaion, happyRotaion, neutralRotaion, sadRotaion, surprisedRotaion]
    expessionArray = [angry, disgusted, fearful, happy, neutral, sad, surprised]

    // console.log(req.query)
    mostExpression = Math.max.apply(null, expessionArray)
    // console.log(mostExpression)
    
    i = expessionArray.reduce( (a,b,i) => a[0] < b ? [b,i] : a, [Number.MIN_VALUE,-1])
     
    
    // console.log(i[1])
    // out = motortRotation[i[1]]
    // console.log(req.query);
    // if (i == 0) {
    //    out =  angryRotaion
    // }
    // else if(i == 1) {
    //     out = [1000, 40, 40, 40, 40 ,40 ,40 ,40 ,40 ,40, 40 ,40, 40, 40, 40, 40, 40, ]
    //     }
    // else if(i == 2) {
    //     out = fearfulRotaion
    //     }
    // else if(i == 3) {
    //     out = [1000, 20, 20, 20, 20 ,20 ,20 ,20 ,20 ,20, 20 ,20, 20, 20, 20, 20, 20 ]
    //     }
    // else if(i == 4) {
    //     out = [1000, 30, 30, 30, 30 ,30 ,30 ,30 ,30 ,30, 30 ,30, 30, 30, 30, 30, 30 ]
    //     }
    // else if(i == 5) {
    //     out = sadRotaion
    //     }
    // else if(i == 5) {
    //     out = surprisedRotaion
    //     }
    
    // rotation1 = neutral * 30;
    // rotation2 = neutral * 30;
    
   
    // runMotor1
    // runMotor2
    // runMotor3
    // runMotor4
    // runMotor5
    // runMotor6
    res.send('Hello World')
    });
getQuery

let f =150

function runMotor1() {
    const cmd = `G1 X${i[1]} Y${i[1]} Z${i[1]} F${f}\n`;
    port1.write(cmd.toString());
    console.log('Sending ' + cmd + 'ie serial port1');
}

function runMotor2() {
    const cmd = `G1 X${i[1]} Y${i[1]} Z${i[1]} F${f}\n`;
    port2.write(cmd.toString());
    console.log('Sending ' + cmd + 'ie serial port2');
}

function runMotor3() {
    const cmd = `G1 X${i[1]} Y${i[1]} Z${i[1]} F${f}\n`;
    port3.write(cmd.toString());
    console.log('Sending ' + cmd + 'ie serial port3');
}

function runMotor4() {
    const cmd = `G1 X${i[1]} Y${i[1]} Z${i[1]} F${f}\n`;
    port4.write(cmd.toString());
    console.log('Sending ' + cmd + 'out the serial port4');
}

function runMotor5() {
    const cmd = `G1 X${i[1]} Y${i[1]} Z${i[1]} F${f}\n`;
    port5.write(cmd.toString());
    console.log('Sending ' + cmd + 'out the serial port5');
}

function runMotor6() {
    const cmd = `G1 X${i[1]} F${f}\n`;
    port6.write(cmd.toString());
    console.log('Sending ' + cmd + 'out the serial port6');
}





// console.log(out[1])

setInterval(runMotor2, 5000)
setInterval(runMotor1, 5000)
setInterval(runMotor3, 5000)
setInterval(runMotor4, 5000)
setInterval(runMotor5, 5000)
setInterval(runMotor6, 5000)


