var friends = ["Jordan", "Corey", "Reagan", "Nick", "Will"],
    locations = ["the classroom", "Makarios", "Taco Bell", "New China Town", "The Dan", "the break room", "the depot", "Lordran", "Castle Black", "The Shire"],
    weapons = ["big gun", "Moonlight Greatsword", "golden gun", "gigantic knife", "hockey puck", "machine gun", "claymore", "needler", "fist", "baseball bat wrapped in barbed wire", "golf club", "iMac", "chess board", "AK47", "piano wire", "exploding Galaxy Note 7", "the keyboard lab", "dangerous weapon", "tactical nuke", "this lab"];

$(document).ready(function(){
    for (a = 1; a < 101; a++) {
        $(document.body).append(`<h3 id="${a}">~ ~ ~ Accusation ${a} ~ ~ ~</h3>`)
        var alrt = `I accuse ${rand(friends)}, with the ${rand(weapons)} in ${rand(locations)}`;
        
    }
    $("h3").click(function(){
        alert(`Accusation ${this.id}: ${alrt}`);
    });
});

function rand(array) {
    return array[Math.floor(Math.random() * array.length)];
}