const Kinect2 = require('kinect2');
const kinect = new Kinect2();

const SerialPort = require('serialport');

const port = new SerialPort('COM3', { baudRate: 115200 });
const port2 = new SerialPort('COM5', { baudRate: 115200 });

let isOpenedPort1 = false;
let isOpenedPort2 = false;

let first = 10
let second = 20
let result = 0

let isTracking = false;


function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms))
}


function add(x, y) {
   return x + y
}

function runMotor1(a, b, c) {
   const cmd = `G1 X${a} Y${b} Z${c} F4000\n`;
   port.write(cmd.toString());
   console.log('Sending ' + cmd + ' out the serial port');
}

function runMotor2(a, b, c) {
   const cmd = `G1 X${a} Y${b} Z${c} F4000\n`;
   port2.write(cmd.toString());
   console.log('Sending ' + cmd + ' out the serial port');
}

function onOpenPort2() {
   isOpenedPort2 = true;
   if (isOpenedPort1 && isOpenedPort2) {
      startKinect();
   }
}
function onOpenPort() {
   isOpenedPort1 = true;
   if (isOpenedPort1 && isOpenedPort2) {
      startKinect()
   }
}


port.on('open', onOpenPort);
port2.on('open', onOpenPort2);



const m1 = {
   _x: 0,
   _y: 0,
   _z: 0,
   set x(value) {
      this._x = value;
   },
   set y(value) {
      this._y = value;
   },
   set z(value) {
      this._z = value;
   }
};

const m2 = {
   _x: 0,
   _y: 0,
   _z: 0,
   set x(value) {
      this._x = value;
   },
   set y(value) {
      this._y = value;
   },
   set z(value) {
      this._z = value;
   }
};








async function startKinect() {

   if (kinect.open()) {
      console.log("Kinect Opened");
      //listen for body frames
      // kinect.on('bodyFrame', function(bodyFrame){
      //    for(var i = 0;  i < bodyFrame.bodies.length; i++) {
      //       if(bodyFrame.bodies[i].tracked) {
      //          console.log(bodyFrame.bodies[i]);
      //       }
      //    }
      // });

      console.log("===============================")
      kinect.on('bodyFrame', function (bodyFrame) {
         let aa = bodyFrame.bodies[0]
         console.log(aa);
         if (bodyFrame.bodies[0].tracked) {
            console.log(bodyFrame.bodies[0].joints[0].cameraX)
            m1.x = 10;
            m1.y = 20;
            m1.z = 30;
            m2.x = 10;
            m2.y = 20;
            m2.z = 30;
            isTracking = true;
            runMotor1(m1._x, m1._y, m1._z)
            runMotor2(m2._x, m2._y, m2._z)

            console.log('istracking')
         } else {
            m1.x = 10;
            m1.y = 20;
            m1.z = 30;
            m2.x = 40;
            m2.y = 50;
            m2.z = 60;
            isTracking = false;
            console.log('isnottracking')

         }
         
      })

      //request body frames

      kinect.openBodyReader();
      
   




      // close the kinect after 5 seconds
      // setTimeout(function(){
      // kinect.close();
      //    console.log("Kinect Closed");
      // }, 5000);
   }


}
setTimeout(function(){
   runMotor1(m1._x, m1._y, m1._z);
   runMotor2(m2._x, m2._y, m2._z);
}, 1000);
   // } else {
         //    if (isTracking) {
         //       let a = 80;
         //       let b = 40;
         //       runMotor1(a);
         //       runMotor2(b);
         //       isTracking = false;
         //       console.log('isnottracking')
         //    }