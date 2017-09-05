var echarts = require('echarts');
var csv = require('csv');

var test = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var _sigpoint = [{xAxis: 50,yAxis: 0},{xAxis: 110,yAxis: 0},{xAxis: 120,yAxis: 0}];
var seat2ID2 = [{"ID":"1_1","value":1901},{"ID":"1_2","value":1902},{"ID":"1_3","value":1903},{"ID":"1_4","value":1904},{"ID":"1_5","value":1905},{"ID":"1_6","value":1906},{"ID":"1_7","value":1907},{"ID":"2_1","value":1908},{"ID":"2_2","value":1909},{"ID":"2_3","value":1910},{"ID":"2_4","value":1911},{"ID":"2_5","value":1912},{"ID":"2_6","value":1913},{"ID":"2_7","value":1914},{"ID":"3_1","value":1915},{"ID":"3_2","value":1916},{"ID":"3_3","value":1917},{"ID":"3_4","value":1918},{"ID":"3_5","value":1919},{"ID":"3_6","value":1920},{"ID":"3_7","value":1921},{"ID":"4_1","value":1922},{"ID":"4_2","value":1923},{"ID":"4_3","value":1924},{"ID":"4_4","value":1925},{"ID":"4_5","value":1926},{"ID":"4_6","value":1927},{"ID":"4_7","value":1928},{"ID":"4_8","value":1929}];
//update chart1 option
function updatechart12 (xvalue, yvalue,titlename) {
        //event.preventDefault();
        var yourChart = echarts.getInstanceByDom(document.getElementById("lineChart"));
        myoption1.xAxis.data = xvalue;
        myoption1.title.text = titlename;
        myoption1.series[0].data = yvalue;
        //myoption1.series[0].markPoint.data = marklist;  
        yourChart.setOption(myoption1);
}


function updatechart1 (seatID) {
        //event.preventDefault();
        // var yourChart = echarts.getInstanceByDom(document.getElementById("lineChart"));
        // yourChart.showLoading({  
        //             text: '正在努力加载中...'  
        //         });  
        
        var tempdata = [];
        var _xAxis = [];

        GSRrecord.find( { sensorID : seatID } ).fetch().forEach(function (post) {
            tempdata.push(post.value);
        });
                //console.log(tempdata);
        duration = tempdata.length;
        var estep = math.eval('74' / duration); 

            for (i = 0; i < duration; i++) {
                var temp = 0;
                temp = temp + math.eval(i * estep);
                temp = parseInt(temp);
                _xAxis.push(temp);
            }


        myoption1.xAxis.data = _xAxis;
        myoption1.title.text = "Sensor ID = "+ seatID ;
        myoption1.series[0].data = tempdata;
        //myoption1.series[0].markPoint.data = marklist;
       
        yourChart.setOption(myoption1);
        // yourChart.hideLoading();



}


function fetchData (seatID) {
        echarts.getInstanceByDom(document.getElementById("lineChart")).showLoading();
        var tempdata = [];
        GSRrecord.find( { sensorID : seatID } ).fetch().forEach(function (post) {
            tempdata.push(post.value);
        });
                //console.log(tempdata);
        duration = tempdata.length;
        var estep = math.eval('74' / duration); 
        var _xAxis = [];
            for (i = 0; i < duration; i++) {
                var temp = 0;
                temp = temp + math.eval(i * estep);
                temp = parseInt(temp);
                _xAxis.push(temp);
            }
        updatechart1(_xAxis, tempdata,"Sensor ID = "+ seatID );



}

//chart1 default option
var myoption1 ={
        title: {
            text: ''
        },
        xAxis: {
             type: 'category',
             axisLine: {
                 onZero: false
             },
             axisLabel: {
                 formatter: '{value} s'
             },
             boundaryGap: false,
            //data: _x1901,
        },
        yAxis: [{
            type: 'value',
            min: 'dataMin',
            max: 'dataMax'
        }],
        series: [{
            name: '值',
            type: 'line',
            //data: _18group,
            lineStyle:{
                normal:{
                    width:3,  //连线粗细
                    //color: "#0F0"  //连线颜色
                }
            }
        }],
        dataZoom: [{
            startValue: '0'
                }, {
            type: 'inside'
        }],
}

Template.chart.onRendered(function() {

		Meteor.call('changecolor', 1,[0,254,254], function (error, result) {
	    	//console.log(result)
	 	});
	 	Meteor.call('changecolor', 2,[0,254,254], function (error, result) {
	    	//console.log(result)
	 	});
		Meteor.call('changecolor', 3,[0,254,254], function (error, result) {
	    	//console.log(result)
	 	});


    var myChart1 = echarts.init(document.getElementById('lineChart'));
    myChart1.setOption(option = {
        title: {
            text: 'Test Result' 
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
             type: 'category',
             axisLine: {
                 onZero: false
             },
             axisLabel: {
                 formatter: '{value} s'
             },
             boundaryGap: false,
             //data: female1x,    
             data:test,
        },
        yAxis: [{
            type: 'value'
        }],

        series: [{
            name: '值',
            type: 'line',
            //data: testy,
            //data: [0.178144217, 0.071689074, 0.062449979, 0.034749657, 0.001914296, 0.108884949, 0.210727913, 0.243222141, 0.206582406, 0.08610728, 0.1639616, 0.429407073, 0.478589738, 0.260497286, 0.114625979, 0.111314072, 0.095254623, 0.043415097, 0.038782626, 0.06050772, 0.044465478, 0.013028379, 0.012917645, 0.093896984, 0.492043974, 0.704616406, 0.338317041, 0.05511824, 0.020043826, 0.017521564, 0.029711447, 0.025792777, 0.023183037, 0.052209402, 0.097313868, 0.120902208, 0.09895257, 0.08883714, 0.088646436, 0.062124163, 0.041380911, 0.035235804],
            lineStyle:{
                normal:{
                    width:3,  //连线粗细
                    //color: "#0F0"  //连线颜色
                }
            },
            markPoint: {
                silent:false,
                //symbol: 'circle' ,
                symbol:'pin',
                symbolOffset: [0, -75],
                symbolSize: 20,
                itemStyle : {
                   normal:{
                     label: {
                        show: false 
                       },
                    color: "#0000CD" ,

                   }
                 },
                effect: {
                    show: true,
                    shadowBlur: 0.4
                },
                //data: femaleSP,
                //data: _sigpoint,
            }   
        }],
        dataZoom: [{
            startValue: '0'
                }, {
            type: 'inside'
        }],
    });
		//跳转视频
    myChart1.on('mouseover', function (params) {
        var jumpTime = params.name;//横坐标的值 
        //var lengthOfVideo = document.getElementById('vid1').duration();
        //console.log(jumpTime);
        //console.log(lengthOfVideo);
        //alert(params.name);
        document.getElementById('vid1').currentTime = jumpTime;
    });

});



Template.chart.events({

	"click .seatNumber": function (event) {

	    //console.log(event.currentTarget.id);
	    var id2Find = event.currentTarget.id;
		// ******	动态数据  	******//
//        echarts.getInstanceByDom(document.getElementById("lineChart")).showLoading();



		$(seat2ID2).each(function(){ 


			if (this.ID == id2Find) {
                updatechart1(this.value.toString() );
                //echarts.getInstanceByDom(document.getElementById("lineChart")).hideLoading();

			} else {
				//console.log('Not Find this ID'); 
			}
		}); 
        
        //echarts.getInstanceByDom(document.getElementById("lineChart")).hideLoading();

		// ******	动态数据结束  	******//

	},
	'click [id="playbut"]': function (event) {
		event.preventDefault();
	    console.log('Start the video and data collection');
	    Meteor.call('changecolor', 1,[0,0,254], function (error, result) {
	    	//console.log(result)
	 	});
	 	Meteor.call('changecolor', 2,[0,0,254], function (error, result) {
	    	//console.log(result)
	 	});
	 	Meteor.call('changecolor', 3,[0,0,254], function (error, result) {
	    	//console.log(result)
	 	});
		// Meteor.call('changecolor', 3,[0,0,254], function (error, result) {
	 //    	//console.log(result)
	 // 	});
	    //document.getElementById('vid1').fullscreenchange();
	    document.getElementById('vid1').play();

	    Meteor.call('cleanrecord', function (error, result) {
	    	console.log(result);
	 	});

	 	// Meteor.call('checkport', function (error, result) {
	  //   	console.log(result);
	 	// });
	    Meteor.call('openport', function (error, result) {
	    	// if(result.toString().match(/Error/gi) != null) {
	     //       alert('Error: ', error.message);
	     //    } else {
		    // 	console.log(result);
		    // }
	 	});
	},
	'click [id="paubut"]': function (event) {
		event.preventDefault();
	    console.log('Stop the video and data collection');
	    document.getElementById('vid1').pause();
		Meteor.call('changecolor', 1,[0,254,254], function (error, result) {
	    	//console.log(result)
	 	});
	 	Meteor.call('changecolor', 2,[0,254,254], function (error, result) {
	    	//console.log(result)
	 	});
		Meteor.call('changecolor', 3,[0,254,254], function (error, result) {
	    	//console.log(result)
	 	});
	 	Meteor.call('closeport', function (error, result) {
	    	//console.log(result)
	 	});
	},
    'click [id="reportbut"]': function(){
        event.preventDefault();
       	//console.log('Test button');

        var tempdata = [];
 		GSRrecord.find().fetch().forEach(function (post) {
 			// ...
 			tempdata.push(post.value);
 		});
 		//console.log(tempdata);
 		//  Meteor.call('checkport', function (error, result) {
	  //   	if (result) {
	  //   		console.log("is true")
	  //   	}
	 	// });
		var csvContent = CSV.unparse(GSRrecord.find().fetch());
		window.open('data:text/csv;charset=utf-8,' + escape(csvContent), '_self');
	},
    'click [id="lamptbut"]': function(){
   //      event.preventDefault();
 		// var tempdata = [];
 		// GSRrecord.find().fetch().forEach(function (post) {
 		// 	// ...
 		// 	tempdata.push(post.value);
 		// });
 		// Meteor.call('checkport', function (error, result) {
	  //   	console.log("sssssss");
	  //   	console.log(result);
	 	// });

	}

});

