let login = prompt('Moi nhap message');
let message = (login=='Employee') ? 'Hello':
                (login=='Director') ? 'Greeting' :
                 (login == '') ? 'No login' : '';

alert(message);          