//injects messenger.js into the webpage
console.log('Dynatrace Favorites Editor - injecting messenger.js ...')

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/messenger.js');
(document.head||document.documentElement).appendChild(s);

s.onload = function() {
    s.parentNode.removeChild(s);
};


//dynamically get the extensionId and set it as a variable in the webpage.
//this will then be available in the messenger.js to call for sending messages back to background.js
var script = document.createElement('script');
script.textContent = "var extensionId = " + JSON.stringify(chrome.runtime.id);
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);




