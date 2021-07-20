/*
content_script run at the load time of a Dynatrace page.
this is meant to update the variable userVariables['nav-menu-favorites'] before the page renders to
    use the preffered favorites list from the extension

This does not currently work. Cannot figure out how to access the variable at the right time.
We can see that updating the favorites list makes an xhr request to "/rest/usersettings/variables/nav-menu-favorites?gtf=l_2_HOURS&gf=all"
    but we don't know what needs to be passed for an authorized argument.
*/

chrome.storage.sync.get(['favorites'], (data) => {
    console.log(`attempting to set userVariables['nav-menu-favorites']...`)
    formatFavorites(data.favorites);

    //userVariables['nav-menu-favorites'] = formatFavorites(data);
});

function formatFavorites(data) {
    let output = '[\\\"';

    for (i = 0; i < data.length - 1; i++) {
        output = output + data[i] + '\\\",\\\"';
    }

    output = output + data[data.length - 1] + '\\\"]';

    console.log(output);

    return output;
}