
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url2 = tabs[0].url;
    var res = url2.replace("youtube.com/watch", "youtube.com/watch_popup");
	chrome.windows.create({url:res, type: "popup", height: 450, width:800});
});
