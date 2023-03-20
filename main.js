function myFuction(str){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').map(char => {
        let index = alphabet.indexOf(char);
        if(index >= 0){ alphabet[(index + 13) % 26];
        }
        else{
            char;
        }
    }).join('');
}
console.log(myFuction('SERR PBQR PNZC'));