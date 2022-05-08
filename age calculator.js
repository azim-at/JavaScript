function lifeInWeeks(age) {
        var yearsRemaining = 90 - age;
        var days = yearsRemaining * 365;
        var weeks = yearsRemaining * 52;
        var month = yearsRemaining * 12;     
        console.log("You have "+days+" days, "+weeks+" weeks, and "+month+" months left.")
}
lifeInWeeks(51);
    