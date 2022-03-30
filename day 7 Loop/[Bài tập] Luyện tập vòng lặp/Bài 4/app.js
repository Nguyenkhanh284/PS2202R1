let numb1 = 1;
let numb2=1;
let numb3;
 for (let i = 0; i < 20; i++) {
     if (i==0){
         numb3=numb1;
         console.log(numb3); 
     } else if ( i==1) {
        numb3=numb2;
        console.log(numb3); 
     }
     else {
         numb3=numb1+numb2;
         numb1=numb2;
         numb2=numb3;
         console.log(numb3);
     }

     if (numb3%5==0) {
         alert(`Số Fibnacci đầu tiên chia hết cho 5 là ${numb3}`);
         break;
     }
 }