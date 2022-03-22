let userName = prompt('Who are you?');
if (userName == 'Admin') {
    let password = prompt('Your password is:');
    if (password == 'TheMaster') {
        alert('Welcome')
    } else if (password == 'null') {
        alert('canceled')
    } else {
        alert('Wrong password.')
    }

} else if (userName == 'null') {
    alert ('canceled');
} else {
    alert ("I don't know you");
}