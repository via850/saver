//warning
var token = localStorage.getItem('AccessToken');
var msg = token ? 'token ' + token : 'token not found';
document.write('<div style="font-size: 100px;">'+msg+'</div>');
