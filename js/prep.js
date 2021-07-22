//when the popup loads, we will check if devops is enabled, if so,
//we will show/hide the devops options accordingly.
window.onload = () => {
    let devbool;
    let rows = document.getElementsByClassName('devrow');

    chrome.storage.sync.get(['devops'], (data) => {
        devbool = data.devops;
        
        for (i = 0; i < rows.length; i++) {
            rows[i].style.display = devbool ? 'block' : 'none';
        };
    });
}

//all checkboxes are of class='option'
let options = document.getElementsByClassName("option");
let groups = document.getElementsByClassName("group");

//add change listener to all checkboxes to update the fav list
for (i = 0; i < options.length; i++) {
    options[i].addEventListener('change', () => {
        updateFavoritesChrome();
    });
};

//add change listener to all checkboxes to update the group list
for (i = 0; i < groups.length; i++) {
    groups[i].addEventListener('change', () => {
        updateGroupsChrome();
    });
};

//check any fav boxes that are already selected from previous session
chrome.storage.sync.get(['favorites'], (data) => {
    for (i = 0; i < options.length; i++) {
        //get value of the checkbox we're observing
        value = options[i].value;

        //if the favList contains the value, we'll check the box
        if (data.favorites.includes(value)) {
            options[i].checked = true;
        }
    }
});

//check any group boxes that are already selected from previous session
chrome.storage.sync.get(['groups'], (data) => {
    for (i = 0; i < groups.length; i++) {
        //get value of the checkbox we're observing
        value = groups[i].value;

        //if the favList contains the value, we'll check the box
        if (data.groups.includes(value)) {
            groups[i].checked = true;
        }
    }
});

//prep the tab buttons
document.getElementById('favbutton').addEventListener('click', () => {changeTab(event, 'menu');});
document.getElementById('expandbutton').addEventListener('click', () => {changeTab(event, 'sections');});