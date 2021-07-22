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

    //scroll to the top :D
    document.getElementById(tab).scroll(0,0);
}