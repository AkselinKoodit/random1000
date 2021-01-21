let n=Math.round(Math.random()*1000);

/* First it test that number is always 1000-0: 

let t=0;
console.log(t);
    while (true) {
        t=Math.round(Math.random()*1000);
        if(t>999){
            console.log(t+" finally!")
            break;
        } else if (t<1) {
            console.log(t+" there you go! It can be 0 as well :)")
            break;
        } else {
            console.log(t);
        }   
    } 
Got both 1000 and 0, let's move on with the actual program:    */

console.log(n);

    let translateN = function(n) {
        switch(n) {

            case 1:
                return 'yksi';
            case 2:
                return 'kaksi';
            case 3:
                return 'kolme';
            case 4:
                return 'neljä';
            case 5:
                return 'viisi';
            case 6:
                return 'kuusi';
            case 7:
                return 'seitsemän';
            case 8:
                return 'kahdeksan';
            case 9:
                return 'yhdeksän';
            case 10:
                return 'kymmenen';
            default:
                return'';

        }
    };
if(n==0){
    console.log('nolla');
} else if(n<11){
    console.log(translateN(n));
} else if (n<20){
    // teens act differently, they end in "toista"
    console.log(translateN(n-10)+'toista');
} else if (n<100) {
    console.log (translateN(Math.floor(n/10))+'kymmentä'+translateN(n%10));
    //note that 0 goes to default and returns ''
} else if (n<110){
    console.log('sata'+translateN(n-100));
} else if(n<120) {
    if(n-110===0) {
        console.log ('satakymmenen');
    } else {
        console.log('sata'+ translateN(n-110)+'toista');
    }
} else if (n<200) {
    console.log('sata'+ translateN(Math.floor((n-100)/10))+'kymmentä'+translateN((n-100)%10)); 
} else if (n<1000){
    // Let's make this simpler by defining how many ones, tens and hundreds there is in the n:
    let hundreds=Math.floor(n/100);
    let tens=Math.floor((n-(hundreds*100))/10);
    let ones=(n-(hundreds*100+tens*10));
        if(tens>1){
            console.log(translateN(hundreds)+'sataa'+translateN(tens)+'kymmentä'+translateN(ones));
        } else if (tens==1) {
            console.log(translateN(hundreds)+'sataa'+translateN(ones)+'toista');
        } else {
            console.log(translateN(hundreds)+'sataa'+translateN(ones));
        }
} else {
    console.log('tuhat!')
}