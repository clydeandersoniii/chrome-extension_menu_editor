chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({favorites: []}, function() {
        console.log("favorites array initialized");
    });
    chrome.storage.sync.set({groups: [], function() {
        console.log("groups array intialized")
    }})
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            //Prod SaaS environments
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains:"live.dynatrace"}
            }),
            //Sprint environments - for testing
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains:"dynatracelabs"}
            }),
            //Prod Managed environments
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains:"managed.internal.dynatrace.com"}
            }),
            //Dev Managed environments
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains:"managed-dev.internal.dynatracelabs.com"}
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});


//listener waiting for requests for the favorites/groups list
chrome.runtime.onMessageExternal.addListener(
    async function(request, sender, sendResponse) {    
        if (request.bool){
            let favList = await getFavorites();
            let groupList = await getGroups();
            sendResponse({favs: favList, groups: groupList});
        }
    }
);

//get the favorites list from chrome storage, format it, and return it
async function getFavorites()
{
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['favorites'], resolve);
    })
    .then(result => {
        return formatFavorites(result.favorites);
    });
}


//format favorites list to an array
//example format: "[\"dashboardsLink\",\"dataExplorerLink\"]"
function formatFavorites(data) {
    let output = '[\"';

    for (i = 0; i < data.length - 1; i++) {
        output = output + data[i] + '\",\"';
    }

    output = output + data[data.length - 1] + '\"]';

    console.log(output);

    return output;
}

//get the groups list from chrome storage, format it, and return it
async function getGroups()
{
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['groups'], resolve);
    })
    .then(result => {
        return formatFavorites(result.groups);
    });
}


//format favorites list to an array
//example format: "[\"dashboardsLink\",\"dataExplorerLink\"]"
function formatGroups(data) {
    let output = '[\"';

    for (i = 0; i < data.length - 1; i++) {
        output = output + data[i] + '\",\"';
    }

    output = output + data[data.length - 1] + '\"]';

    console.log(output);

    return output;
}