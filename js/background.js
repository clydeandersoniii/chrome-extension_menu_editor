chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({favorites: []}, function() {
        console.log("favorites array initialized");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            //SaaS environments
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains:"live.dynatrace"}
            }),
            //Sprint environments - for testing
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains:"dynatracelabs"}
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
