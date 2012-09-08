chrome.contextMenus.create({"title": "Als Antwort hinzufügen","onclick":onClick, contexts:["selection"]});

function onClick(info, tab){
	var notification = webkitNotifications.createNotification(
			  'ic_launcher.png',  // icon url - can be relative
			  "Antwort hinzugefügt",  // notification title
			  info.selectionText  // notification body text
			);
	notification.show();
}

chrome.tabs.executeScript(null, {file: "context_script.js"});