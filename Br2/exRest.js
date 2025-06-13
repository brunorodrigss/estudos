function somarNumeros (n, ...num){
    for (let i = 0; i < num.length; i++){
        n = n + num
        console.log(n)
    }

    return n
}

somarNumeros(1,2,3,4,5)
