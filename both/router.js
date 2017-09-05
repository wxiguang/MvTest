
// Protect all Routes,except some specific url
// support by https://github.com/meteor-useraccounts/iron-routing
// Router.configure({
//     layoutTemplate: 'publicLayout',
//     loadingTemplate: 'loading',
//     notFoundTemplate: 'dataNotFound',
// });

// Router.plugin('ensureSignedIn', {
//     except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword']
// });
// end of account iron-route config // 


Router.route('login', function() {
	this.render('login');
}, {
  name: 'login'
});
Router.route('index', function() {
	this.render('index');
}, {
  name: 'index'
});
Router.route('pic', function() {
	this.render('pic');
}, {
  name: 'pic'
});
Router.route('mainheader', function() {
	this.render('mainheader');
}, {
  name: 'mainheader'
});

Router.route('siderbar', function() {
	this.render('siderbar');
}, {
  name: 'siderbar'
});
Router.route('content', function() {
	this.render('content');
	this.layout('publicLayout');
}, {
  name: 'content'
});
Router.route('footer', function() {
	this.render('footer');
}, {
  name: 'footer'
});
Router.route('control-sidebar', function() {
	this.render('control-sidebar');
}, {
  name: 'control-sidebar'
});

Router.route('chart', function() {
	this.render('chart');
	this.layout('publicLayout');
}, {
  name: 'chart'
});
Router.route('table', function() {
	this.render('table');
	this.layout('publicLayout');
}, {
  name: 'table'
});
Router.route('calendar', function() {
	this.render('calendar');
	this.layout('publicLayout');
}, {
  name: 'calendar'
});

// Router.route('result', function() {
// 	this.render('result');
// }, {
//   name: 'result',
//   onBeforeAction: function(){
//     var currentUser = Meteor.userId();
//         if(currentUser){
//             this.next();
//         } else {
//             this.render("login");
//     }
//   }
// });
