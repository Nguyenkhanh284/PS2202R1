let rightNumb = 10;
function guessNumber() {
    let inputNumb=parseFloat(prompt('Moi ban doan'));
    // let i = 0;
    // while (i < 3) {
    //     if (inputNumb === rightNumb) {
    //         alert('Ban da doan dung');
    //         break;
    //     } else {
    //         alert('Ban da doan sai, hay doan lai');
    //         inputNumb = parseFloat(prompt('Moi ban doan'));
    //     }
    //     i++;
    // }


    for (let i = 0; i < 3; i++) {
        let a = i + 1;
        if (inputNumb === rightNumb) {
            alert('Ban da doan dung');
            break;
        } else if (i === 2) {
            alert(`ban da het co hoi vi da doan sai ${a} lan`);
        } else {
            alert(`Ban da doan sai ${a} lan, hay doan lai`);
            inputNumb = parseFloat(prompt('Moi ban doan'));
        }
    }

    // for (let i = 0; i < 3; i++) {
    //     if (i===3) {
    //         break;
    //     } else {
    //         if (inputNumb===rightNumb) {
    //             alert('dung');
    //         } else {
    //             alert('doan sai, moi nhhap lai');
    //             inputNumb = parseFloat(prompt('Moi ban doan'));
    //         }
    //     }
    // }


}