firstName = prompt("Enter the First name");
secondName = prompt("Enter the Second name");
cal = Math.random();
cal = Math.floor(cal * 100);
if ( cal > 30 && cal <= 70) {
    alert(firstName+" & "+secondName+" your love percentage is " +cal+"%");
}

if ( cal <= 30 ) {
    alert(firstName+" & "+secondName+" your love percentage is " +cal+"%" + " Find another partner");
}

if ( cal > 70 ){
    alert(firstName+" & "+secondName+" your love percentage is " +cal+"%" + " You both are made for each other.");
}