/*for (let i = 1; i <= 100; i +=1) {
    let r = '';
    if ((i % 3 == 0) && (i % 5 ==0)) {
       r = 'FizzBuzz';
        continue;
    }
    if (i % 3 == 0) {
       r = 'Fizz';
        continue;
    }
    if (i % 5 == 0) {
       r = 'Buzz'; 
        continue;
    }
      r = i.toString();
    
    console.log(r);
}*/

 

/*function fizzBuzz(n) {
    let r = '';
    if (n % 3 == 0) {
        r = 'Fizz';
    }
    if (n % 5 == 0) {
        r += 'Buzz';
    }
    
    return r || n.toString();
}

for (let i = 1; i <= 100; i +=1) {
    
    let r = fizzBuzz(i);
      
    console.log(r);
}*/



/*function fizzBuzz(n) {
    let r = '';
    if (n % 3 == 0) {
        r = 'Fizz';
    }
    if (n % 5 == 0) {
        r += 'Buzz';
    }
    
    return r || n.toString();
}

function show(n, text) {
    console.log(`${n} => ${text}`)
}

for (let i = 1; i <= 100; i +=1) {
    
    let r = fizzBuzz(i);
      
    show(i, r);
}*/



function toFizzBuzzText(n) {
    let r = '';
    if (n % 3 == 0) {
        r = 'Fizz';
    }
    if (n % 5 == 0) {
        r += 'Buzz';
    }
    
    return r || n.toString();
}

function show(n, text) {
    console.log(`${n} => ${text}`);
}

function fizzBuzz(min, max, convertor) {    
    for (let i = min; i <= max; i += 1) {
        show(i, convertor(i));
    }
}

fizzBuzz(1, 100, toFizzBuzzText);














