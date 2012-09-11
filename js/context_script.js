var USER = "admin";
var HOST = "http://www.theheck.square7.ch/index.php";
var USER_POOL = HOST + "?username=" + USER;
var PASSWORD = "asdf123";

var xhr = new XMLHttpRequest();
xhr.open("GET", chrome.extension.getURL('/html/form_new_record.html'), true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		$('body').append('<div id="sc_container" style="display:none;">'+xhr.responseText+'</div>');
		$('#new_record').submit(function(){
			$.ajax({
				type: "POST",
				url: USER_POOL,
				dataType: "plain/text",
				data: {func:"insert", password:PASSWORD, q:$('#question').value(), a:$('answere').value()}
			}).done(function(ret){
				
			});
			return true;
		});
	}
};
xhr.send();

window.addEventListener('keydown', function(e){
if(e.which == 121){
	$('#sc_container').toggle();
	
	$.ajax({
		type: "POST",
		url: USER_POOL,
		dataType: "json",
		data: {func:"select", password:PASSWORD}
	}).done(function(ret){
		ret.a;
	});
}}
, false);