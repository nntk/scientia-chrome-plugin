var xhr = new XMLHttpRequest();
xhr.open("GET", chrome.extension.getURL('/html/form_new_record.html'), true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		$('body').append('<div id="sc_container" style="display:none;">'+xhr.responseText+'</div>');
		$('#new_record').submit(function(){
			$.ajax({
				type: "POST",
				url: "http://www.theheck.square7.ch/index.php?username=admin",
				dataType: "plain/text",
				data: {func:"select", password:"asdf123", q:$('#question').value(), a:$('answere').value()}
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
		url: "http://www.theheck.square7.ch/index.php?username=admin",
		dataType: "json",
		data: {func:"select", password:"asdf123"}
	}).done(function(ret){
		var json = jQuery.parseJSON(ret);
		alert(json.q);
	});
}}
, false);