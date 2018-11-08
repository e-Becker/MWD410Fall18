var express = require('express');
var router = express.Router();

var User = require('..models/user');
 
router.get('/register', function(req, res, next) {
res.render('register', {title:'Register'});
}
 
router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login'});
	var name = req.body.name;
	var email = req.body.email;
	
});

router.post('/register', function (req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;

	req.checkBody('name', 'Name field is required').notEmpty();
	req.checkBody('email', 'Email field is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username field is required').notEmpty();
	req.checkBody('password', 'Password field is required').notEmpty();

	var errors = req.validationErrors();
	
	if (errors) {
		res.render('register', {
			errors: errors
	}else{
			var newUser = new User({
				name: name,
				email: email,
				username: username,
				password: password,
				
			});
			User.createUser(newUser, function(err, user){
				if(err) throw err;
				console.log(user);
			});
			
			
			
			res.location('/');
			res.redirect('/');
	}
});

module.exports = router;
