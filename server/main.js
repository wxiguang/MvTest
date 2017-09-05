import { Meteor } from 'meteor/meteor';


function changeC (x,y) {

    var hue = require('node-hue-api'),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

    var displayResult = function(result) {
        //console.log(result);
    };


    var displayError = function(err) {
        //console.error(err);
    };


    var hostname = "192.168.1.129",
        username = "yCqVoGd5NZTXz5Fn2B04-LhXqxPSxFWQSwSG2q6u",
        api = new HueApi(hostname, username),
        state = lightState.create();


function changeColor(LampID, Color) {
      //api.setLightState(LampID, {"rgb": Color}).then(displayResult).fail(displayError).done();
      api.setLightState(LampID, {"rgb": Color, "bri": 10}, function(err, lights) {
        if (err) throw err;
        displayResult(lights);
    });


    console.log("Change LampID");
    console.log(Color);
   }


      changeColor(x,y); 

}


Meteor.startup(function () {

	// Add a default admin user if no user exits
  if(!Meteor.users.find().count()) {
    var options = {
      username: 'admin', 
      password: 'admin', 
      email: 'admin@admin.com',
      profile: {
            first_name: 'Admin',
            last_name: 'Admin',
            company: 'Xinhuanet',
      }
    };
    Accounts.createUser(options);
    console.log("Add a default admin user");
  }
});


Meteor.methods({


  openport(){


      var SerialPort = require('serialport');
      //port = new SerialPort('/dev/cu.usbserial-AL014L8C', {baudRate:115200,dataBits: 8,parser: SerialPort.parsers.readline('\n')}, 
      port = new SerialPort('/dev/cu.usbserial-A103R34E', {baudRate:115200,dataBits: 8, parser: SerialPort.parsers.readline('\n')}, 
          function (err) {
            if (err) {
              return console.log('Error: ', err.message);
            }
          }
      );



    // function changelightA () {

    //     var randomNum = parseInt((Math.random() * 100));
    //     //console.log(randomNum);
    //     // if(randomNum>55 && randomNum < 65) {
    //     //   console.log(randomNum.toString());
    //     //   changeC(3,[0,0,200]);
    //     // } else {
    //     //     changeC(3,[200,0,0]);
    //     // } 
    //     var light = parseInt((Math.random() * 4));
    //     var light2 = parseInt((Math.random() * 4));
    //     switch (true) 
    //     {
    //       case randomNum<10:
    //         changeC(light,[200,0,0]);
    //         break;
    //       case randomNum>20 && randomNum<50:
    //         changeC(light,[0,0,200]);
    //         changeC(light2,[0,0,200]);
    //         break;
    //       case randomNum>90:
    //         changeC(light,[200,0,0]);
    //         break;
    //       default:

    //     }

    // }


      var Fiber = require('fibers');
      port.on('open', function(err) {
        if(err) {
           console.log('Error: ', err.message);
           //return err.message;
        } else {
          console.log("打开端口成功，正在监听数据中");
           port.on('data',function(data){
            console.log(data);
              if(data.match(/19[0-2][0-9]/) != null && data.match(/[A-E]/gi) == null) {
                  //var starP = data.search(/\,19[0-2][0-9]/) + 1 ;
                  var starP = data.search(/\,[0-2][0-9]/) + 1 ;
                  var endP = starP + 12 ;
                  var bufferStr = data.split(",").toString().slice(starP,endP);
                  //console.log(bufferStr);
                  var _time = (new Date).toTimeString();
                  //changelightA();
                  //console.log(_time);
                  //console.log(bufferStr.substring(0, 4)); 
                  //console.log(bufferStr.substring(6, 10)); 
                  Fiber(function() {
                    id = GSRrecord.insert({
                      sensorID: bufferStr.substring(0, 4),
                      value: bufferStr.substring(6, 12),
                      time: new Date()
                    });
                  }).run();
              } else {
                console.log('Error: ' + 'Data is Null');
              }
           })
         }

      });
      //return bufferStr;
  },
  closeport () {
      // var SerialPort = require('serialport');
      // var port = new SerialPort('/dev/cu.usbserial-A103R34E', {baudRate:115200,dataBits: 8, parser: SerialPort.parsers.readline('\n')});
      // //console.log(port.isOpen());


      if (port.isOpen()) {
        port.close(function (err) {
            if(err) {
               return console.log("关闭端口"+portName+"错误："+err);
            } else {
              console.log("关闭端口");
            }
        })
      }
  },

  checkport () {

      if (port.isOpen()) {
          return true;
      }
  },
  changecolor(x,y) {
    var hue = require('node-hue-api'),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

    var displayResult = function(result) {
        console.log(result);
    };


    var displayError = function(err) {
        console.error(err);
    };


    var hostname = "192.168.1.129",
        username = "yCqVoGd5NZTXz5Fn2B04-LhXqxPSxFWQSwSG2q6u",
        api = new HueApi(hostname, username),
        state = lightState.create();


    function changeColor(LampID, Color) {
      //api.setLightState(LampID, {"rgb": Color}).then(displayResult).fail(displayError).done();
      api.setLightState(LampID, {"rgb": Color}, function(err, lights) {
        if (err) throw err;
        displayResult(lights);
    });


    console.log("Change LampID");
    console.log(Color);
   }


      changeColor(x,y); 

  },
  cleanrecord() {
        GSRrecord.remove({});
  }
})