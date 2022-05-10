var count = 0;
var output = [];
function fizzBuzz() {
    count++;
    if ((count % 3 == 0) && (count % 5 == 0)) {
        output.push('fizzBuzz');
        console.log(output);
    }
    else if (count %  3 == 0) {
        output.push('fizz');
        console.log(output);
    }else if (count % 5 == 0){
        output.push('buzz');
        console.log(output);
    }else {
        output.push(count);
        console.log(output);
    }
}