let n = +prompt("raqam kiriting")

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        prompt("Juft son", i);
    }
    else{
        prompt("Toq son");
    }
}


let yil = +prompt('son kriting')
alert(`${yil*24} soat ${yil*365} kun ${yil*52} hafta ${yil*12}oy bor`)


let sum = 0

for(let i=0; i<=5; i++){
    sum = sum +i
}
console.log(sum);