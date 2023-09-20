document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll(".answerbutton").length;

    for (var i = 0; i < buttons ; i++) {
        document.querySelectorAll(".answerbutton")[i].addEventListener("click", function() {
            checkDirection(this);
        });
    }
    document.getElementById("monthButton").addEventListener("click", function() {
        makeMonth();
    })
});

var baseNames = [["January", 0],["February", 0],["March", 1], ["April", 2], ["May",2], ["June", 2], ["July", 2], ["August",2], ["September",1], ["October",0], ["November",0], ["December",0]];
var monthNames = [["January", 0],["February", 0],["March", 1], ["April", 2], ["May",2], ["June", 2], ["July", 2], ["August",2], ["September",1], ["October",0], ["November",0], ["December",0]];
var handicap1 = ["September",1]
var handicap2 = ["March",1];

var previousMonth, monthNumber;
previousMonth = 0;
monthNumber = 0;
var handicap = 0;

var winCount = 0;
var newCreated = false;

function makeMonth(){
    if (newCreated == false) {
        while (previousMonth == monthNumber) {
            monthNumber = Math.floor(Math.random() *( monthNames.length));
        }
        var monthObject = document.getElementById("month");
        monthObject.innerHTML = monthNames[monthNumber][0];
        previousMonth = monthNumber;
        newCreated = true;
        document.getElementById("answer").innerHTML = "Pick the direction!";
    }
    else if (newCreated == true) {
        document.getElementById("answer").innerHTML = "Cheater.  Pick a direction first.";
    }
}

function checkDirection(e) {
    if (newCreated == true) {
        if (e.value == monthNames[monthNumber][1]) {
            document.getElementById("answer").innerHTML = "Correct";
            newCreated = false;
            winCount++;
            if (handicap>5&&monthNames[monthNumber][1] == 1) {
                monthNames = monthNames.slice(0,baseNames.length);
                document.getElementById("answer").innerHTML = "Finally correct! You missed this one " + handicap + " times.";
                handicap = 0;
            }
        }
        else if (e.value!=monthNames[monthNumber][1]) {
            document.getElementById("answer").innerHTML = "No points. Go to the next month.";
            newCreated = false;
            if (winCount>0){winCount--;}
            if (monthNames[monthNumber][1]==1) {
                monthNames.push(handicap1);
                monthNames.push(handicap2);
                handicap++;
            }
        }
        if (winCount == 0) {
            document.getElementById("win-loss").style.animation = "pointsStationary 2.5s linear"
            document.getElementById("win-loss").style.animationIterationCount = "infinite"
        }
        else if (winCount > 0) {
            document.getElementById("win-loss").style.animation = "pointsRGB 2.5s linear"
            document.getElementById("win-loss").style.animationIterationCount = "infinite"
        }

        document.getElementById("points").innerHTML = winCount;
    }
    else if (newCreated == false) {
        document.getElementById("answer").innerHTML = "You already guessed. Move to the next month.";
    }
    console.log(handicap);
}
