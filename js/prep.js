//all checkboxes are of class='option'
let options = document.getElementsByClassName("option");

//add change listener to all checkboxes to update the fav list
for (i = 0; i < options.length; i++) {
    options[i].addEventListener('change', () => {
        updateFavoritesChrome();
    });
};

//check any boxes that are already selected from previous session
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

function changeTab(evt, tab) {
    console.log('click fired on ' + tab);

    //show the calling div
    //favbutton = menu div
    //expandedbutton = sections div
    let caller = document.getElementById(tab);
    caller.style.display = 'block';

    //hide the other div
    let other = tab === 'menu' ? document.getElementById('sections') : document.getElementById('menu');
    other.style.display = 'none';

    //adjust colors of buttons to show selected
    if (tab === 'menu') {
        document.getElementById('favbutton').style.backgroundColor = '#0075ff';
        document.getElementById('favbutton').style.color = 'white';
        document.getElementById('expandbutton').style.backgroundColor = '#ccc';
        document.getElementById('expandbutton').style.color = 'black';
    }
    else {
        document.getElementById('expandbutton').style.backgroundColor = '#0075ff';
        document.getElementById('expandbutton').style.color = 'white';
        document.getElementById('favbutton').style.backgroundColor = '#ccc';
        document.getElementById('favbutton').style.color = 'black';
    }
}

//prep the tab buttons
document.getElementById('favbutton').addEventListener('click', () => {changeTab(event, 'menu');});
document.getElementById('expandbutton').addEventListener('click', () => {changeTab(event, 'sections');});