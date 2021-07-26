//each time the page is reloaded, update the userVariables to update the Favorites
window.onload = configureUserVariables();

function configureUserVariables () {
    console.log('Dynatrace Favorites Editor - attempting to configure userVariables...');

    //connect to the extension from the webpage to grab the new userVariables to set them
    chrome.runtime.sendMessage(extensionId, {bool: true}, null,  
        function(response) {
            console.log('Dynatrace Favorites Editor - favorites list: ' + response.favs);
            console.log('Dynatrace Favorites Editor - groups list: ' + response.groups);
            userVariables['nav-menu-favorites'] = response.favs;
            userVariables['nav-menu-expanded-groups'] = response.groups;
        }
    ); 
}