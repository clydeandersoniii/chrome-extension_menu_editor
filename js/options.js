//add event listener to checkbox to update devops setting
console.log('setting listener')
document.getElementById('enableDevops').addEventListener('change', () => {
    toggleDevops(document.getElementById('enableDevops').checked);
});


//toggle the button if it's true from the previous session
chrome.storage.sync.get(['devops'], (data) => {
    document.getElementById('enableDevops').checked = data.devops;
});

//turn devops on/off when the checkbox is toggled
function toggleDevops(bool){
    chrome.storage.sync.set({devops: bool}, function() {
        console.log("devops updated: " + bool);
    });
}