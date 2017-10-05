var friends = ["Jordan", "Corey", "Reagan", "Nick", "Will"],
    locations = ["the classroom", "Makarios", "Taco Bell", "New China Town", "The Dan", "the break room", "the depot", "Lordran", "Castle Black", "The Shire"],
    weapons = ["big gun", "Moonlight Greatsword", "golden gun", "gigantic knife", "hockey puck", "machine gun", "claymore", "needler", "fist", "baseball bat wrapped in barbed wire", "golf club", "iMac", "chess board", "AK47", "piano wire", "exploding Galaxy Note 7", "the keyboard lab", "dangerous weapon", "tactical nuke", "this lab"];
    var randFriend,
        randLocation,
        randWeapon;
    
$(document).ready(function(){
    for (a = 1; a < 101; a++) {
        randFriend = rand(friends),
        randLocation = rand(locations),
        randWeapon = rand(weapons);
        var addh3 = $(`<h3 id="${a}">~ ~ ~ Accusation ${a} ~ ~ ~</h3>`);
        $(document.body).append(addh3);

        $(addh3).click(function(){
            al();
        });
    }
});

function rand(array) {
    return array[Math.floor(Math.random() * array.length) + 0];
}

var al = function() {
    alert(`Accusation: I accuse ${randFriend}, with the ${randWeapon} in ${randLocation}`);
    }