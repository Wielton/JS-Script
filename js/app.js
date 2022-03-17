//Created a script to verify age and subscription status

var userAge = 19;
var isSubscribed = true;

if (!(userAge >= 18) && !(isSubscribed = true)) {
    console.log('The user is under 18 and not subscribed.');
} else if ((userAge >= 18) && !(isSubscribed = true)) {
    console.log('The user is 18 or older and is not subscribed.');
} else if (!(userAge >= 18) && (isSubscribed = true)) {
    console.log('The user is under 18 and is subscribed.');
} else {
    console.log('The user is 18 or older and is subscribed.');
}