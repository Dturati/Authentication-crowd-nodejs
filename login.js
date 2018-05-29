var CrowdClient = require('atlassian-crowd-client');
var User = require('atlassian-crowd-client/lib/models/user');

var crowd = new CrowdClient({
    baseUrl: 'http://localhost:port/crowd/',
    application: {
      name: 'name aplication',
      password: 'password application'
    }
  });


crowd.session.create('login user ', 'password user').then(function (session) {
    console.log('Token:' + session.token)
    crowd.session.getUser(session.token).then(function (user) {
        console.log('User name:, ' + user.displayname);
    });
});
