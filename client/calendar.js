		function modSchedHeight(){
			var headHeight = 100;
			var sch = document.getElementById("scheduler_here");
			sch.style.height = (parseInt(document.body.offsetHeight)-headHeight)+"px";
			var contbox = document.getElementById("contbox");
			contbox.style.width = (parseInt(document.body.offsetWidth)-300)+"px";
		}



Template.calendar.onRendered(function() {
	  //Init dhtmlxScheduler.
	  //window.resizeTo(150,300)
		//modSchedHeight();
	scheduler.init("scheduler_here", new Date());
	scheduler.config.xml_date="%Y-%m-%d %H:%i";
	scheduler.config.first_hour = 8;
	scheduler.config.multi_day = true;
	scheduler.templates.event_class=function(s,e,ev){ return ev.custom?"custom":""; };
	//scheduler.load("./xml/events.xml?v=35");
	//
	//
	//// 0 refers to Sunday, 6 - to Saturday
	scheduler.ignore_week = function(date){
	    if (date.getDay() == 6 || date.getDay() == 0) //hides Saturdays and Sundays
	        return true;
	};

  //Init dhtmlxScheduler data adapter.
  scheduler.meteor(TasksCollection);
  //or
  scheduler.meteor(TasksCollection.find(/*[anything]*/), TasksCollection);


});