// 1. kilometerToMeter
function kilometerToMeter(kilometer) {
    var toMeter = kilometer * 1000;
    return toMeter;
}

var totalMeters = kilometerToMeter(7);
console.log(totalMeters);


// 2.budgetCalculator
function budgetCalculator(mobile, watch, laptop) {
    mobile = 50 * mobile;
    watch = 100 * watch;
    laptop = 500 * laptop;
    var subtotal = mobile + watch + laptop;
    return subtotal;
}

var total = budgetCalculator(2, 2, 2);
console.log(total);

// 3. hotelCost
function hotelCost(livingDay) {
    var fullCost = 100 * livingDay;
    if (livingDay > 10) {
        fullCost = 80 * livingDay;
    } else if (livingDay > 20) {
        fullCost = 50 * livingDay;
    }
    return fullCost
}

var totalCost = hotelCost(28);
console.log(totalCost)


// 4. megaFriend
function megaFriend(friendsName) {
    var largestName = "";
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}

var finalName = megaFriend(['jual', 'kalam', 'abdullah', 'ashik', 'ridoy'])
console.log(finalName);