//Created a script to verify age and subscription status

// I have initiated two equal length arrays for the users' ages and subscription status
// We will run a for loop to iterate through the elements of the arrays and determine
// if the user is old enough and if they are subscribed or not
var userAges = [19, 25, 17, 42, 75];
var isSubscribed = [true, true, false, true, false];

// The for loop will begin at the zero index
// then loop through the lengths of both arrays' indexes
// and fulfill a condition in the IF Statement.
for (i = 0; i < userAges.length; i++) {
    if (((userAges[i] < 18) && (isSubscribed[i] != true))) {
        console.log('The user is under 18 and not subscribed.');
    } else if ((userAges[i] >= 18) && (isSubscribed[i] != true)) {
        console.log('The user is 18 or older and is not subscribed.');
    } else if ((userAges[i] < 18) && (isSubscribed[i] = true)) {
        console.log('The user is under 18 and is subscribed.');
    } else {
        console.log('The user is 18 or older and is subscribed.');
}
}


// I mapped both arrays into a new object array and then iterated through each object
// but it was printing 5 copies and didn't have time to figure it out

/*
var users=['Grant', 'Mike', 'Alex', 'Ray', 'Horace'];
var user = users.map((name, index) => {
    for (i = 0; i < userAges.length; i++) {
        
        if (((userAges[i] < 18) && (isSubscribed[i] != true))) {
            console.log('The user is under 18 and not subscribed.');
        } else if ((userAges[i] >= 18) && (isSubscribed[i] != true)) {
            console.log('The user is 18 or older and is not subscribed.');
        } else if ((userAges[i] < 18) && (isSubscribed[i] = true)) {
            console.log('The user is under 18 and is subscribed.');
        } else {
            console.log('The user is 18 or older and is subscribed.');
    }
    }
    return {
        name: name,
        userAge: userAges[index],
        isSubscribed: isSubscribed[index]
    }
}
);
*/











// Here I used the "names" array to create an array of objects from each seperate array above





// for (let i = 0; i < 5; i++){
//     console.log("loop");
// }




