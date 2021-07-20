//all checkboxes are of class='option'
let options = document.getElementsByClassName("option");

//add change listener to all checkboxes to update the fav list
for (i = 0; i < options.length; i++) {
    options[i].addEventListener('change', () => {
        updateFavorites();
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
