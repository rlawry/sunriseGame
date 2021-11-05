<html>
<link rel="stylesheet" href="months.css">
<script src="months.js"> </script>
    <body onload="makeMonth()">
        <div class="row text1">
            <div id="month"></div>
        </div>
        <div class="row">
            <div><button id="monthButton">Make a Month</button></div>
        </div>
        <div class="row text2">
            Sunrise Direction
        </div>
        <div>
            <button class="btn" id="neButton" value=2>North of East</button><button class="btn" id="dueEastButton" value=1>Due East</button><button class="btn" id="seButton" value=0>South of East</button>
        </div>
        <div class="text3" id="answer">Pick a direction.
        </div>
        <div class="text4" id="win-loss">Points:&nbsp;&nbsp;<span id="points">0</span>
        </div>
    </body>
</html>