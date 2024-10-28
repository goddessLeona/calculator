function calcu() {
    let nr1 = prompt ("Write in a number")
    let nr2 = prompt ("Write in one mor number")
    let calc = prompt ("Pick and write in one of this to use with your nr: +, -, *, /")
    
    let newnr1 = parseInt(nr1)
    let newnr2 = parseInt(nr2)

    if (calc === "+"){
        console.log(newnr1 + newnr2)
    }else if(calc=== "-"){
        console.log(newnr1 - newnr2)
    }else if (calc === "*"){
        console.log(newnr1 * newnr2)
    }else if (calc === "/"){
        console.log(newnr1 / newnr2)
    }else{
        console.log(error)
    }

}