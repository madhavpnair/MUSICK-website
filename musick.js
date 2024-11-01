var numberOfButtons = document.querySelectorAll(".bu").length;

var audioElements = {
    "song 1": new Audio("./songs/maranamvath.mp3"),
    "song 2": new Audio("./songs/poom.mp3"),
    "song 3": new Audio("./songs/kp.mp3"),
    "song 4": new Audio("./songs/avni.mp3"),
    "song 5": new Audio("./songs/ensw.mp3"),
    "song 6": new Audio("./songs/vsndye.mp3")
};

var isPlaying = {
    "song 1": false,
    "song 2": false,
    "song 3": false,
    "song 4": false,
    "song 5": false,
    "song 6": false
};

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".bu")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        if (isPlaying[buttonInnerHTML]) {
            // If audio is currently playing, pause it
            audioElements[buttonInnerHTML].pause();
            isPlaying[buttonInnerHTML] = false;
        } else {
            // If audio is not playing, play it
            makeSound(buttonInnerHTML);
            makeAnimation(buttonInnerHTML);
            isPlaying[buttonInnerHTML] = true;
        }
    });
}

function makeSound(key) {
    switch (key) {
        case "song 1":
            audioElements["song 1"].play();
            break;
        case "song 2":
            audioElements["song 2"].play();
            break;
        case "song 3":
            audioElements["song 3"].play();
            break;
        case "song 4":
            audioElements["song 4"].play();
            break;
        case "song 5":
            audioElements["song 5"].play();
            break;
        case "song 6":
            audioElements["song 6"].play();
            break;
    }
}

function makeAnimation(currentKey) {
    var activeButton = document.querySelector("#b" + currentKey.slice(5,6));
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
