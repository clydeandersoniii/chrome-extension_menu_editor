//everytime a checkbox is checked/unchecked we'll blindly update the entire list
function updateFavoritesChrome() {
    let favList = [];
    for (i = 0; i < options.length; i++){
        if (options[i].checked){
            favList.push(options[i].value);
        }
    }

    chrome.storage.sync.set({favorites: favList}, function () {
        console.log(favList.length ? 'favorites updated to ' + favList : 'favorites list empty!');
    });
}